import { IsNotEmpty, IsEmail, Matches, IsOptional } from 'class-validator';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { RegexHelper } from 'src/helpers/regex.helper';

export class UpdateUserDto {
  @IsOptional() // Torna o campo opcional, pois o usuário pode não querer atualizar o nome de usuário
  @IsNotEmpty()
  username?: string;

  @IsOptional() // Torna o campo opcional, pois o usuário pode não querer atualizar o email
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsOptional() // Torna o campo opcional, pois o usuário pode não querer atualizar a senha
  @IsNotEmpty()
  @Matches(RegexHelper.password, {
    message: MessagesHelper.PASSWORD_VALID,
  })
  password?: string;

  // Adicione mais campos conforme necessário, por exemplo:
  @IsOptional()
  country?: string;

  @IsOptional()
  gender?: string;

  @IsOptional()
  birthdate?: string;
}
