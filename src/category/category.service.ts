
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryParams, CategoryRequestDTO } from './dto/category.dto';
import { CategoryEntity } from './entity/category.schema';


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly category: Repository<CategoryEntity>,
    ) { }

    async getAllCategory() {
        return this.category.find()
    }

    async createCategory(data: CategoryRequestDTO) {
        return this.category.save(data)
    }

    async updateCategory(params: CategoryParams, data: CategoryRequestDTO) {
        const category = await this.category.findOne({ where: { id: params.id } })

        return this.category.save({
            ...category,
            ...data,
        });

    }

    async deleteCategory(id: number) {
        await this.category.delete({ id })
        return {
            success: true
        }
    }
}