import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRequestBodyDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    register(@Body() data: UserRequestBodyDTO) {
        return this.userService.register(data);
    }

}
