import { Field, ArgsType } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateUserDto {
  @Field(() => String)
  @IsString()
  @Length(3, 50)
  username: string;

  @Field(() => String)
  @IsEmail()
  email: string;
}
