import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColorEntity } from './color/entity/color.schema';
import { ProductEntity } from './product/entity/product.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ColorEntity)
    private readonly color: Repository<ColorEntity>,

    @InjectRepository(ProductEntity)
    private readonly product: Repository<ProductEntity>,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async test() {
    const color = await this.color.findOne({ where: { id: 1 } })
    const product = await this.product.findOne({ where: { id: 1 }, relations: { colors: true } })
    console.log(product);
    product.colors = [...product.colors, color]


    return await this.product.save(product)

  }
}
