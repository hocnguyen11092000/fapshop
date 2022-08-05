
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserResponse } from 'src/user/dto/response/user-response.dto';

const getCurrentUserByContext = (context: ExecutionContext): UserResponse => {
  return context.switchToHttp().getRequest().user;
};

//create a decorator to get context from request
export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
