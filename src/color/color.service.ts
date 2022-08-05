import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { ColorEntity } from './entity/color.schema';


@Injectable()
export class ColorService {
    constructor(
        @InjectRepository(ColorEntity)
        private readonly color: Repository<ColorEntity>,
    ) { }

    async getAllColor() {
        return this.color.find()
    }

    async getDetailColor(id: number) {
        return this.color.findOneBy({ id })
    }

    async createColor(colorBody) {
        return this.color.save(colorBody)
    }

    async updateColor(colorBody, params) {
        const color = await this.color.findOne({ where: { id: params.id } })

        return this.color.save({
            ...color,
            ...colorBody,
        });
    }

    async deleteColor(id: number) {
        await this.color.delete({ id })
        return {
            success: true
        }
    }
}