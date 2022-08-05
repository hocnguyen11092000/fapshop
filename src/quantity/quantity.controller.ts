import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { QuantityRequestDTO } from './dto/quantity.dto';
import { QuantityService } from './quantity.service';

@Controller('quantities')
export class QuantityController {
    constructor(private readonly quantityService: QuantityService) { }

    @Get()
    getAllQuantity() {
        return this.quantityService.getAllQuantity()
    }

    @Get('/detail/:id')
    getDetailQuantity(@Param('id') id: number) {
        return this.quantityService.getDetailQuantity(id)
    }

    @Put('/update/:id')
    updateQuantity(@Param('id') id: number, @Body() data: QuantityRequestDTO) {
        return this.quantityService.updateQuantity(id, data)
    }

    @Delete('/delete/:id')
    deleteQuantity(@Param('id') id: number) {
        return this.quantityService.deleteQuantity(id)
    }
}
