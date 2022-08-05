import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryParams, CategoryRequestDTO } from './dto/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    getAllCategory() {
        return this.categoryService.getAllCategory();
    }

    @Get('/detail/:id')
    getDetailCategory(@Param('id') id: number) {
        return this.categoryService.getDetailCategory(id);
    }

    @Post('/create')
    createCategory(@Body() data: CategoryRequestDTO) {
        return this.categoryService.createCategory(data)
    }

    @Put('/update/:id')
    updateCategory(@Param() params: CategoryParams, @Body() data: CategoryRequestDTO) {
        return this.categoryService.updateCategory(params, data)
    }

    @Delete('/delete/:id')
    deleteCategory(@Param('id') id: number) {
        return this.categoryService.deleteCategory(id)
    }
}
