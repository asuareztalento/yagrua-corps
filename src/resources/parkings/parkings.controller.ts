import { Controller, Post, Body, Logger, Get, Param } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { BasicController } from 'src/utils/basic.controller';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import * as _ from 'lodash';

@Controller('parkings')
export class ParkingsController extends BasicController {
  private readonly logger = new Logger(ParkingsController.name);

  constructor(private readonly parkingsService: ParkingsService) {
    super(parkingsService);
  }

  @Post()
  @ApiOperation({ summary: 'Create an entity' })
  @ApiResponse({ status: 201, description: 'The entity is created' })
  create(@Body() createDto: CreateParkingDto) {
    this.logger.debug('[parking] create: ' + JSON.stringify(createDto));
    return this.parkingsService.create(createDto);
  }

  @Get('corp/:corpsId')
  @ApiOperation({ summary: 'Returns all towtruck owned by this corpId in the form X,Y,Z' })
  findByCorps(@Param('corpsId') corpsId: string) {
    this.logger.debug('[findByCorps] corp ids: ' + corpsId);
    const tenants = _.split(corpsId, ',');
    return this.parkingsService.findByCorp(tenants);
  }
}
