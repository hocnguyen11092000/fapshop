import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductRequestBodyDTO {
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsInt()
    @IsNumber()
    discount?: number;

    @IsNotEmpty()
    @IsInt()
    @IsNumber()
    category_id?: any;
}
