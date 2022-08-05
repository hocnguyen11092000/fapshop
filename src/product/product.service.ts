import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { ColorEntity } from 'src/color/entity/color.schema';
import { SizeEntity } from 'src/size/entity/size.schema';
import { Like, Repository } from 'typeorm';
import { ProductRequestBodyDTO } from './dto/product.dto';
import { ProductEntity } from './entity/product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly product: Repository<ProductEntity>,

        @InjectRepository(ColorEntity)
        private readonly color: Repository<ColorEntity>,

        @InjectRepository(SizeEntity)
        private readonly size: Repository<SizeEntity>,
    ) { }

    async getAllProduct(query) {

        const resultPerpage = 8
        const page = query.page || 1
        const skip = Number(page - 1) * resultPerpage

        const keyword = query.keyword || ''

        const [result, total] = await this.product.findAndCount(
            {
                where: { name: Like('%' + keyword + '%') }, order: { id: "ASC" },
                take: resultPerpage,
                skip,
                relations: [
                    'category_id',
                    'images',
                    'quantitys.size',
                    'quantitys.color',
                ],
            },
        );

        return {
            data: result,
            count: total,
            totalPages: Math.ceil(total / resultPerpage),
            nextPage: Number(page) + 1 <= Math.ceil(total / resultPerpage) ? +page + 1 : null,
            prePage: page - 1 > 0 ? page - 1 : null
        }
    }

    async getDetailProduct(id: number) {
        return this.product.findOne({
            where: { id }, relations: [
                'category_id',
                'images',
                'quantitys.size',
                'quantitys.color',
            ],
        })
    }

    async createProduct(data: ProductRequestBodyDTO) {
        return this.product.save(data)
    }

    async updateProduct(id: number, data: ProductRequestBodyDTO) {
        const product = await this.product.findOneBy({ id })

        return this.product.save({
            ...product,
            ...data
        })
    }

    async deleteProduct(id: number) {
        const product = await this.product.findOneBy({ id })

        if (!product) {
            throw new NotFoundException(['product not found'])
        }

        await this.product.delete({ id })
        return {
            success: true
        }
    }
}
