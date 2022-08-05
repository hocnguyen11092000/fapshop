
import { TokenPayload } from '../../utils/payloads/token.payload';

import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { UserService } from '../user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const token = request?.headers?.authorization as string;
          if (!token)
            throw new UnauthorizedException([
              'login đi mậy'
            ]);
          return token.replace('Bearer ', '');
        },
      ]),
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET') || 'rxPhglGJWPlOW599',
    });
  }

  async validate(payload: TokenPayload) {
    return this.usersService.getUserById(payload.id);
  }
}
