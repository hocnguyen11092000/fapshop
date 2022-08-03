import { Controller, Get } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AppService } from './app.service';
import { ColorEntity } from './color/entity/color.schema';
import { ProductEntity } from './product/entity/product.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async test() {
    return this.appService.test()
  }
}
