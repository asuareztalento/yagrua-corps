import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorpEntity } from 'src/entities/corp.entity';
import { Repository } from 'typeorm';
import { BaseService } from './base.service';

@Injectable()
export class CorpService extends BaseService {
    constructor(
        @InjectRepository(CorpEntity)
        public readonly repository: Repository<CorpEntity>
    ) {
        super(repository);
    }

}
