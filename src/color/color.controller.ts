import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorBody } from './interface/color.interface';

@Controller('colors')
export class ColorController {
    constructor(private readonly colorService: ColorService) { }

    @Get()
    getAllColor() {
        return this.colorService.getAllColor();
    }

    @Get('/detail/:id')
    getDetailColor(@Param('id') id: number) {
        return this.colorService.getDetailColor(id);
    }

    @Post('/create')
    createColor(@Body() colorBody: ColorBody) {
        return this.colorService.createColor(colorBody)
    }

    @Put('/update/:id')
    updateColor(@Body() colorBody: ColorBody, @Param() id: string) {
        return this.colorService.updateColor(colorBody, id)
    }

    @Delete('/delete/:id')
    deleteColor(@Param('id') id: number) {
        return this.colorService.deleteColor(id)
    }
}
