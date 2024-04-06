import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MessagesHelper } from 'src/helpers/messages.helper';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
    });
  }

  async validate(username: string, password: string) {
    const user = this.authService.validateUser(username, password);

    if (!user)
      throw new UnauthorizedException(MessagesHelper.PasswordOrEmailInvalid);

    return user;
  }
}
