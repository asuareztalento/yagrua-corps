import { Module } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { ParkingsController } from './parkings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from './entities/parking.entity';

@Module({
  controllers: [ParkingsController],
  exports: [ParkingsService],
  imports: [TypeOrmModule.forFeature([Parking])],
  providers: [ParkingsService],
})
export class ParkingsModule {}
