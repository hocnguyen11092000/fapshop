import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorModule } from 'src/color/color.module';
import { SizeModule } from 'src/size/size.module';
import { ProductEntity } from './entity/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity]), ColorModule, SizeModule
    ],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [
        TypeOrmModule.forFeature([ProductEntity]),
    ],
})
export class ProductModule { }
