import { Injectable } from '@nestjs/common';
import { BasicService } from 'src/utils/basic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Parking } from './entities/parking.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ParkingsService extends BasicService {
  constructor(@InjectRepository(Parking) repo: Repository<Parking>) {
    super(repo);
  }

  findByCorp(corpId: number[]) {
    return this.repo.find({ where: { tenant: In(corpId) } });
  }
}
