import { Controller, Post, Body, Logger, Get, Param } from '@nestjs/common';
import { TowtrucksService } from './towtrucks.service';
import { CreateTowtruckDto } from './dto/create-towtruck.dto';
import { BasicController } from 'src/utils/basic.controller';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import * as _ from 'lodash';

@Controller('towtrucks')
export class TowtrucksController extends BasicController {
  private readonly logger = new Logger(TowtrucksController.name);

  constructor(private readonly towtrucksService: TowtrucksService) {
    super(towtrucksService);
  }

  @Post()
  @ApiOperation({ summary: 'Create an entity' })
  @ApiResponse({ status: 201, description: 'The entity is created' })
  create(@Body() createDto: CreateTowtruckDto) {
    this.logger.debug('[towtruck] create: ' + JSON.stringify(createDto));
    return this.towtrucksService.create(createDto);
  }

  @Get('corp/:corpsId')
  @ApiOperation({ summary: 'Returns all towtruck owned by this corpId in the form X,Y,Z' })
  findByCorps(@Param('corpsId') corpsId: string) {
    this.logger.debug('[findByCorps] corp ids: ' + corpsId);
    const tenants = _.split(corpsId, ',');
    return this.towtrucksService.findByCorp(tenants);
  }
}
