import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/utils/filer-filter';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) { }

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            fileFilter: fileFilter,
            limits: { fileSize: 1024 * 1024 },
        }),
    )

    add(@UploadedFile() file: Express.Multer.File, @Body() data: any) {
        return this.imageService.add(file, data);
    }
}
