import { Controller, Get } from '@nestjs/common';
import { SizeService } from './size.service';

@Controller('colors')
export class SizeController {
    constructor(private readonly sizeService: SizeService) { }

    @Get()
    getAllColor() {

    }

}
