
import {
  BadGatewayException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string) {
    if (!username || !password) throw new BadGatewayException();
    if (username.length > 32 || password.length > 32)
      throw new BadRequestException([
        'username vs password dài  quá kìa bạn'
      ]);
    return this.userService.validateUser(username.trim(), password.trim());
  }
}
