import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SizeEntity } from './entity/size.schema';


@Injectable()
export class SizeService {
    constructor(
        @InjectRepository(SizeEntity)
        private readonly color: Repository<SizeEntity>,
    ) { }

    getAllColor() {
        return this.color.find()
    }


}