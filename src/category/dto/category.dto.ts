import { IsNotEmpty, IsString } from "class-validator";

export class CategoryRequestDTO {
    @IsNotEmpty()
    @IsString()
    name: string
}

export class CategoryParams {
    id: number
}