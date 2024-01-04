import {
  Controller,
  Post,
  Body,
  Logger,
  Get,
  Param,
  Patch,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { BasicController } from 'src/utils/basic.controller';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController extends BasicController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  @Post()
  @ApiOperation({ summary: 'Create an entity' })
  @ApiResponse({ status: 201, description: 'The entity is created' })
  create(@Body() createDto: CreateUserDto) {
    this.logger.debug('[auth] create: ' + JSON.stringify(createDto));
    return this.usersService.create(createDto);
  }

  @Get('auth/:authId')
  @ApiOperation({ summary: 'Get user data by auth id' })
  findByAuth(@Param('authId') authId: string) {
    return this.usersService.findByAuth(+authId);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Update the entity data' })
  update(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
    return this.usersService.update(+id, updateDto);
  }

  @Patch('/update/auth/:authId')
  @ApiOperation({ summary: 'Update the entity data by auth id' })
  async updateByAuth(@Param('authId') authId: string, @Body() updateDto: UpdateUserDto) {
    const user: User = await this.usersService.findByAuth(+authId);
    // check user is found
    if (!user) throw new HttpException(['user not found'], HttpStatus.NOT_FOUND);

    return this.update(user.id.toString(), updateDto);
  }
}
