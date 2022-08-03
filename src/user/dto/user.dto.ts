import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserRole } from "src/utils/constant/enum/user-role.enum";

export class UserRequestBodyDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsString()
    role?: UserRole


}
