import { Module } from '@nestjs/common';
import { AllowedService } from './allowed.service';
import { AllowedController } from './allowed.controller';
import { ParkingsModule } from '../parkings/parkings.module';
import { TowtrucksModule } from '../towtrucks/towtrucks.module';

@Module({
  controllers: [AllowedController],
  imports: [ParkingsModule, TowtrucksModule],
  providers: [AllowedService],
})
export class AllowedModule {}
