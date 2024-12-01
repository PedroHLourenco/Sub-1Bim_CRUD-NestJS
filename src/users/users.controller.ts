import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UserService) {}

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedUser: Partial<CreateUserDto>,
  ) {
    return this.usersService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.usersService.deleteUser(id);
    return { message: `User with ID ${id} deleted successfully.` };
  }
}
