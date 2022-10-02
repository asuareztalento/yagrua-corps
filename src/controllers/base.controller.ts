import { Get, Post, Put, Delete, Param, Body, Req, Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BaseService } from 'src/services/base.service';

export class BaseController {
    constructor(private service: BaseService) {}

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    add(@Body() data: any): any {
        Logger.log('hola');
        return this.service.save(data);
    }

    @Get(':id')
    // @UseGuards(AuthGuard('jwt'))
    async getById(@Param() params, @Req() res): Promise<any> {
        var response = await this.service.findById(params.id);
        return response;
    }

    @Get('')
    // @UseGuards(AuthGuard('jwt'))
    async getAll(@Param() params, @Req() res): Promise<any> {
        var response = await this.service.findAll();
        return response;
    }

    @Put()
    // @UseGuards(AuthGuard('jwt'))
    update(@Body() data: any, @Param() params): any {
        return this.service.save(data);
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    async delete(@Param() params, @Req() req): Promise<any> {
        return this.service.delete(params.id);
    }
}
