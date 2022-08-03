import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from 'src/cloundinary/cloundinay.module';
import { ImageEntity } from './entity/image.schema';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ImageEntity]),
        CloudinaryModule
    ],
    controllers: [ImageController],
    providers: [ImageService],
    exports: [

        TypeOrmModule.forFeature([ImageEntity]),
    ],
})
export class ImageModule { }
