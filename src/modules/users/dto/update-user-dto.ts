import { IsNotEmpty, IsEmail, Matches, IsOptional, MinLength } from 'class-validator';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { RegexHelper } from 'src/helpers/regex.helper';

export class UpdateUserDto {
  @IsOptional()
  @MinLength(3, {
    message: 'O nome de usuário deve ter no mínimo 3 caracteres',
  })
  username?: string;

  @IsOptional()
  @IsEmail({}, {
    message: 'O email deve ser um endereço de email válido',
  })
  email?: string;

  @IsOptional()
  @Matches(RegexHelper.password, {
    message: MessagesHelper.PASSWORD_VALID,
  })
  @MinLength(8, {
    message: 'A senha deve ter no mínimo 8 caracteres',
  })
  password?: string;

  @IsOptional()
  country?: string;

  @IsOptional()
  gender?: string;

  @IsOptional()
  birthdate?: string;

  @IsOptional()
  @Matches(RegexHelper.phone, {
    message: 'O número de telefone deve ser um número de telefone válido',
  })
  phone?: string;
}
