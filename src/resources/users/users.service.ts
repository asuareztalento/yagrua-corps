import { Injectable, Logger } from '@nestjs/common';
import { BasicService } from 'src/utils/basic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends BasicService {
  private readonly logger = new Logger(UsersService.name);
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }

  findByAuth(authId: number): Promise<User> {
    return this.repo.findOne({ where: { auth: authId } });
  }
}
