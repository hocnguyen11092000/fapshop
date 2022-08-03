import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import { ColorEntity } from './entity/color.schema';

@Module({
    imports: [
        TypeOrmModule.forFeature([ColorEntity]),
    ],
    controllers: [ColorController],
    providers: [ColorService],
    exports: [

        TypeOrmModule.forFeature([ColorEntity]),
    ],
})
export class ColorModule { }
