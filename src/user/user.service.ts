import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateActiveUser, UserRequestBodyDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { compare } from 'bcrypt';
import { UserEntity } from './entity/user.schema';
import { JwtService } from '@nestjs/jwt';
import { UserResponse } from './dto/response/user-response.dto';
import { TokenPayload } from 'src/utils/payloads/token.payload';
import { UserRole } from 'src/utils/constant/enum/user-role.enum';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly user: Repository<UserEntity>,
        private readonly jwtService: JwtService,
    ) { }

    async register(data: UserRequestBodyDTO) {
        const newuser = this.user.create(data)
        return this.user.save(newuser)
    }

    async login(user: UserResponse) {
        const tokenPayload: TokenPayload = {
            id: user.id,
            role: user.role,
        };

        const token = this.jwtService.sign(tokenPayload);

        return token;
    }

    async getUserById(id) {
        return this.user.findOne({ where: { id } })
    }

    async validateUser(username: string, password: string) {
        const user = await this.user.findOne({ where: { username: username } });
        if (!user) {
            throw new UnauthorizedException([
                'InvalidCredentials'
            ]);
        }

        const passwordIsValid = await compare(password, user.password);
        if (!passwordIsValid) {
            throw new UnauthorizedException([
                'InvalidCredentials'
            ]);
        }
        return user;
    }

    async verifyToken(token: string) {
        try {
            return await this.jwtService.verifyAsync(token);
        } catch (error) {
            throw new UnauthorizedException([
                'token expired'
            ]);
        }
    }

    async deleteUser(id: number) {
        await this.user.delete({ id })

        return {
            success: true
        }
    }

    async updateRoleUser(id: number, data: UserRole | any) {
        const user = await this.user.findOneBy({ id })

        return this.user.save({
            ...user,
            role: data.role
        })
    }

    async updateActiveUser(id: number, isActive: UpdateActiveUser) {
        const user = await this.user.findOneBy({ id })

        return this.user.save({
            ...user,
            isAvailable: isActive.isAvailable
        })
    }
}

