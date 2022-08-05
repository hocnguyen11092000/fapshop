import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuantityController } from './quantity.controller';
import { QuantityService } from './quantity.service';
import { QuantityEntity } from './entity/quantity.schema';

@Module({
    imports: [
        TypeOrmModule.forFeature([QuantityEntity]),
    ],
    controllers: [QuantityController],
    providers: [QuantityService],
    exports: [

        TypeOrmModule.forFeature([QuantityEntity]),
    ],
})
export class QuantityModule { }
