import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SizeRequestDTO } from './dto/size.dto';
import { SizeEntity } from './entity/size.schema';


@Injectable()
export class SizeService {
    constructor(
        @InjectRepository(SizeEntity)
        private readonly size: Repository<SizeEntity>,
    ) { }

    async getAllSize() {
        return this.size.find()
    }

    async getDetailSize(id: number) {
        return this.size.findOneBy({ id })
    }

    async createSize(data: SizeRequestDTO) {
        return this.size.save(data)

    }

    async updateSize(id: number, data: SizeRequestDTO) {
        const size = await this.size.findOne({ where: { id } })

        return this.size.save({
            ...size,
            ...data
        })
    }

    async deleteSize(id: number) {
        await this.size.delete({ id })

        return {
            success: true
        }
    }
}