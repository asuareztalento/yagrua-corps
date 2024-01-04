import { Module } from '@nestjs/common';
import { TowtrucksService } from './towtrucks.service';
import { TowtrucksController } from './towtrucks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Towtruck } from './entities/towtruck.entity';

@Module({
  controllers: [TowtrucksController],
  exports: [TowtrucksService],
  imports: [TypeOrmModule.forFeature([Towtruck])],
  providers: [TowtrucksService],
})
export class TowtrucksModule {}
