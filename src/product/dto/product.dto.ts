import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductRequestBodyDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    discription: string;

    @IsNotEmpty()
    @IsInt()
    @IsNumber()
    discount: number;

    @IsNotEmpty()
    @IsInt()
    @IsNumber()
    category_id: any;

    @IsNotEmpty()
    @IsInt()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsInt()
    @IsNumber()
    colors: Array<number>;

    @IsNotEmpty()
    @IsInt()
    @IsNumber()
    sizes: Array<number>;

}
