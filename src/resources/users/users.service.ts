import { Injectable, Logger } from '@nestjs/common';
import { BasicService } from 'src/utils/basic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';
import * as _ from 'lodash';

@Injectable()
export class UsersService extends BasicService {
  private readonly logger = new Logger(UsersService.name);
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }

  async findByAuth(authId: number): Promise<User> {
    const user: User = await this.repo.findOne({ where: { auth: authId } });
    return _.isNull(user) ? new User() : user;
  }

  findByTenants(tenants: number[]) {
    this.logger.debug('[findByTenants] tenants: ' + tenants + ' - length: ' + tenants.length);
    return this.repo.find({ where: { tenant: In(tenants) } });
  }
}
