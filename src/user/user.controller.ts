import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserRole } from 'src/utils/constant/enum/user-role.enum';
import { CurrentUser } from 'src/utils/decorators/current-user.decorator';
import { UserResponse } from './dto/response/user-response.dto';
import { UpdateActiveUser, UserRequestBodyDTO } from './dto/user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    register(@Body() data: UserRequestBodyDTO) {
        return this.userService.register(data);
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@CurrentUser() user: UserResponse) {
        console.log(user);
        const token = await this.userService.login(user);
        return { accessToken: token };
    }

    //get user from accessToken
    @Get()
    @UseGuards(JwtAuthGuard)
    async getUser(@CurrentUser() user: UserResponse): Promise<UserResponse> {
        delete user.password

        return user;
    }

    @Delete('/delete/:id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id)
    }

    @Put('/update-role/:id')
    updateRoleUser(@Param('id') id: number, @Body() role: UserRole) {
        return this.userService.updateRoleUser(id, role)
    }

    @Put('/update-active/:id')
    updateActiveUser(@Param('id') id: number, @Body() isAvailable: UpdateActiveUser) {

        return this.userService.updateActiveUser(id, isAvailable)
    }
}
