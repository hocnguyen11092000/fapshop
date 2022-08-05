import { IsNotEmpty, IsString } from "class-validator";

export class SizeRequestDTO {
    @IsNotEmpty()
    @IsString()
    name: string
}