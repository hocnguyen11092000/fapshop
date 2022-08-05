import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/user/guards/local-auth.guard';
import { UserRole } from 'src/utils/constant/enum/user-role.enum';
import { Roles } from 'src/utils/decorators/roles.decorator';
import { ProductRequestBodyDTO } from './dto/product.dto';
import { UpdateProduct } from './interface/productInterface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getAllProducts(@Query() productQuery: any) {
        return this.productService.getAllProduct(productQuery);
    }

    @Get('/detail/:id')
    getDetailProduct(@Param('id') id: number) {
        return this.productService.getDetailProduct(id);
    }

    @Post('/create')
    @UseGuards(JwtAuthGuard)
    @Roles([UserRole.Staff, UserRole.Admin])
    createProduct(@Body() data: ProductRequestBodyDTO) {
        this.productService.createProduct(data)
    }

    @Put('/update/:id')
    updateProduct(@Param('id') id: number, @Body() data: UpdateProduct) {
        return this.productService.updateProduct(id, data)
    }

    @Delete('/delete/:id')
    deleteProduct(@Param('id') id: number) {
        return this.productService.deleteProduct(id)
    }
}
