import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Towtruck } from './entities/towtruck.entity';
import { In, Repository } from 'typeorm';
import { BasicService } from 'src/utils/basic.service';

@Injectable()
export class TowtrucksService extends BasicService {
  constructor(@InjectRepository(Towtruck) repo: Repository<Towtruck>) {
    super(repo);
  }

  findByCorp(corpId: number[]) {
    return this.repo.find({ where: { tenant: In(corpId) } });
  }
}
