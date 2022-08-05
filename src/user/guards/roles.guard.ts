
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/utils/constant/enum/user-role.enum';
import { ROLES_KEY } from 'src/utils/decorators/roles.decorator';
import { TokenPayload } from 'src/utils/payloads/token.payload';
import { UserService } from '../user.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UserService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }

    const jwt = context.switchToHttp().getRequest().headers?.authorization;
    if (!jwt)
      throw new UnauthorizedException([
        'Unauthorized'
      ]);

    const accesstoken = jwt.replace('Bearer ', '');
    const payload: TokenPayload = await this.userService.verifyToken(
      accesstoken,
    );
    if (!requiredRoles.some((role) => payload.role === role))
      throw new ForbiddenException([
        'm méo có quyền vô nhá'
      ]);
    return true;
    // return true;
  }
}
