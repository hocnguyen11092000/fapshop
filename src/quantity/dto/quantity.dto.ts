import { IsInt, IsNotEmpty, IsNumber } from "class-validator";
import { ProductEntity } from "src/product/entity/product.schema";
import { DeepPartial } from "typeorm";

export class QuantityRequestDTO {
    @IsNumber()
    @IsNotEmpty()
    @IsInt()
    quantity: number

    @IsNumber()
    @IsNotEmpty()
    @IsInt()
    size_id: number

    @IsNumber()
    @IsNotEmpty()
    @IsInt()
    product_id: DeepPartial<ProductEntity>
}