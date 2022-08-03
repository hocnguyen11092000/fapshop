import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRequestBodyDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entity/user.schema';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly user: Repository<UserEntity>,
    ) { }

    async register(data: UserRequestBodyDTO) {

        return this.user.save(data)
    }
}