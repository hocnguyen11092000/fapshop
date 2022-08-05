import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SizeRequestDTO } from './dto/size.dto';
import { SizeService } from './size.service';

@Controller('sizes')
export class SizeController {
    constructor(private readonly sizeService: SizeService) { }

    @Get()
    getAllSizes() {
        return this.sizeService.getAllSize()
    }

    @Get('/detail/:id')
    getDetailSize(@Param('id') id: number) {
        return this.sizeService.getDetailSize(id)
    }

    @Post('/create')
    createSize(@Body() data: SizeRequestDTO) {
        return this.sizeService.createSize(data)
    }

    @Put('/update/:id')
    updateSize(@Param('id') id: number, @Body() data: SizeRequestDTO) {
        return this.sizeService.updateSize(id, data)
    }

    @Delete('/delete/:id')
    deleteSize(@Param('id') id: number) {
        return this.sizeService.deleteSize(id)
    }

}
