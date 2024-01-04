import { Injectable, Logger } from '@nestjs/common';
import * as _ from 'lodash';
import { ParkingsService } from '../parkings/parkings.service';
import { Parking } from '../parkings/entities/parking.entity';
import { Towtruck } from '../towtrucks/entities/towtruck.entity';
import { TowtrucksService } from '../towtrucks/towtrucks.service';

@Injectable()
export class AllowedService {
  private readonly logger = new Logger(AllowedService.name);

  constructor(
    private readonly parkingsService: ParkingsService,
    private readonly towtrucksService: TowtrucksService,
  ) {}

  public async parkingsAllowed(JWTtenants: string, parkingId: number) {
    const tenants = _.split(JWTtenants, ',');
    const parking: Parking = await this.parkingsService.findOne(parkingId);
    this.logger.debug('tenants: ' + JSON.stringify(tenants));
    this.logger.debug('parking: ' + JSON.stringify(parking));
    this.logger.debug('parking: ' + JSON.stringify(parking.tenant));

    const allowed = _.includes(tenants, parking?.tenant.toString());

    const response = allowed ? { allowed: true } : {};
    return response;
  }

  public async towtruckAllowed(JWTtenants: string, towtruckId: number) {
    const tenants = _.split(JWTtenants, ',');
    const towtruck: Towtruck = await this.towtrucksService.findOne(towtruckId);
    this.logger.debug('tenants: ' + JSON.stringify(tenants));
    this.logger.debug('towtruck: ' + JSON.stringify(towtruck));

    const allowed = _.includes(tenants, towtruck?.tenant.toString());

    const response = allowed ? { allowed: true } : {};
    return response;
  }
}
