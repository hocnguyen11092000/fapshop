import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.schema';
import { UserController } from './user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET') || 'rxPhglGJWPlOW599',
                signOptions: {
                    expiresIn: `${configService.get('JWT_EXPIRATION_TIME') || 20}h`,
                },
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [UserController],
    providers: [UserService, LocalStrategy, JwtStrategy],
    exports: [
        UserService,
        TypeOrmModule.forFeature([UserEntity]),
    ],
})
export class UserModule { }
