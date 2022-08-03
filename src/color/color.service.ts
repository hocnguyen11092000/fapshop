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

    async createColor(colorBody) {
        return this.color.save(colorBody)
    }

    async updateColor(colorBody, id) {
        return id
    }
}