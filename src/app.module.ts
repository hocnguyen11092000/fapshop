import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/entity/category.schema';
import { CloudinaryModule } from './cloundinary/cloundinay.module';
import { ColorModule } from './color/color.module';
import { ColorEntity } from './color/entity/color.schema';
import { ImageEntity } from './image/entity/image.schema';
import { ImageModule } from './image/image.module';
import { ProductEntity } from './product/entity/product.schema';
import { ProductModule } from './product/product.module';
import { SizeEntity } from './size/entity/size.schema';
import { SizeModule } from './size/size.module';
import { UserEntity } from './user/entity/user.schema';
import { UserrModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'fapshop',
      synchronize: true,
      entities: [ProductEntity, CategoryEntity, ColorEntity, SizeEntity, ImageEntity, UserEntity]
    }),
    ProductModule, CloudinaryModule, ImageModule, ColorModule, SizeModule, CategoryModule, UserrModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
