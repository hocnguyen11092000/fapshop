
import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloundianry.provider';
import { CloudinaryService } from './cloundinary.service';


@Module({
    providers: [CloudinaryProvider, CloudinaryService],
    exports: [CloudinaryProvider, CloudinaryService],
})
export class CloudinaryModule { }