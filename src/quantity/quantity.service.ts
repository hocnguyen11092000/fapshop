import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuantityRequestDTO } from './dto/quantity.dto';
import { QuantityEntity } from './entity/quantity.schema';


@Injectable()
export class QuantityService {
    constructor(
        @InjectRepository(QuantityEntity)
        private readonly quantity: Repository<QuantityEntity>,
    ) { }

    async getAllQuantity() {
        return this.quantity.find({ relations: ['size', 'product_id', 'color'] })
    }

    async getDetailQuantity(id: number) {
        return this.quantity.findOne({ where: { id }, relations: ['size', 'product_id'] })
    }

    async updateQuantity(id: number, data: QuantityRequestDTO) {

        const quantity = await this.quantity.findOneBy({ id })

        if (!quantity) {
            throw new NotFoundException(['quantity not found']);
        }

        return this.quantity.save({
            ...quantity,
            ...data
        })
    }

    async deleteQuantity(id: number) {
        const quantity = await this.quantity.findOneBy({ id })

        if (!quantity) {
            throw new NotFoundException(['quantity not found'])
        }

        await this.quantity.delete({ id })
        return {
            success: true
        }
    }
}
