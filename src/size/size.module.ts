import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeEntity } from './entity/size.schema';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([SizeEntity]),
    ],
    controllers: [SizeController],
    providers: [SizeService],
    exports: [

        TypeOrmModule.forFeature([SizeEntity]),
    ],
})
export class SizeModule { }
