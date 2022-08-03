import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloundinary/cloundinary.service';
import { Repository } from 'typeorm';
import { ImageEntity } from './entity/image.schema';

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(ImageEntity)
        private readonly image: Repository<ImageEntity>,
        private readonly cloudinary: CloudinaryService
    ) { }

    async add(file, data) {
        const image = await this.cloudinary.uploadImage(file)
        const newData = {
            ...data,
            url: image.url,
            public_id: image.public_id
        }

        // const newImage = await this.image.create(newData)
        // await this.image.insert(newImage);

        return this.image.save(newData);
    }
}
