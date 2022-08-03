import { Injectable } from '@nestjs/common';
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

        const resultPerpage = 3
        const page = query.page || 1
        const skip = Number(page - 1) * resultPerpage

        const keyword = query.keyword || ''

        const [result, total] = await this.product.findAndCount(
            {
                where: { name: Like('%' + keyword + '%') }, order: { id: "ASC" },
                take: resultPerpage,
                skip,
                relations: {
                    category_id: true,
                    colors: true,
                    sizes: true,
                    images: true
                },
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

    async createProduct(data: ProductRequestBodyDTO) {

        const product = this.product.create({
            name: data.name,
            discount: data.discount,
            quantity: data.quantity,
            description: data.discription,
            category_id: data.category_id,
        })

        const result = await this.product.save(product)

        data.colors.map(async (x) => {
            const product = await this.product.findOne({ where: { id: result.id }, relations: { colors: true } })

            product.colors = [...product.colors, await this.color.findOne({ where: { id: x } })]
            await this.product.save(product)
        }
        )

        data.sizes.map(async (x) => {
            const product = await this.product.findOne({ where: { id: result.id }, relations: { sizes: true } })

            product.sizes = [...product.sizes, await this.size.findOne({ where: { id: x } })]
            await this.product.save(product)
        }
        )

    }
}
