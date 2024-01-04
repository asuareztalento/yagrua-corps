import { Controller, Get, Logger, Param } from '@nestjs/common';
import { AllowedService } from './allowed.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('allowed')
export class AllowedController {
  private readonly logger = new Logger(AllowedController.name);

  constructor(private readonly allowedService: AllowedService) {}

  @Get('parkings/:JWTtenants/:parkingId')
  @ApiOperation({ summary: 'check if a user is allowed to manage a parking entity' })
  parkingsAllowed(@Param('JWTtenants') JWTtenants: string, @Param('parkingId') parkingId: number) {
    this.logger.debug('JWTtenants: ' + JWTtenants);
    return this.allowedService.parkingsAllowed(JWTtenants, parkingId);
  }

  @Get('towtrucks/:JWTtenants/:parkingId')
  @ApiOperation({ summary: 'check if a user is allowed to manage a towtruck entity' })
  towtrucksAllowed(
    @Param('JWTtenants') JWTtenants: string,
    @Param('towtruckId') towtruckId: number,
  ) {
    this.logger.debug('JWTtenants: ' + JWTtenants);
    return this.allowedService.towtruckAllowed(JWTtenants, towtruckId);
  }
}
