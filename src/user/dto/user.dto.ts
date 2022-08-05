import { IsBoolean, IsEmail, IsInt, isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserRole } from "src/utils/constant/enum/user-role.enum";

export class UserRequestBodyDTO {
    @IsNotEmpty()
    @IsString()
    username: string;

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

export class UpdateActiveUser {

    @IsNotEmpty()
    @IsBoolean()
    isAvailable: boolean
}
