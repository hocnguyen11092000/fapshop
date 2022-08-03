import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductRequestBodyDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getAllProducts(@Query() productQuery: any) {
        return this.productService.getAllProduct(productQuery);
    }

    @Post('create')
    createProduct(@Body() productBody: ProductRequestBodyDTO) {
        this.productService.createProduct(productBody)
    }
}
