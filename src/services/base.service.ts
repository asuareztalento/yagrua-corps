import { Repository } from 'typeorm';

export class BaseService {
  constructor(private readonly repo: Repository<any>) {}

  async save(entity: any) {
    return this.repo.save(entity);
  }

  async update(entity: any) {
    return this.repo.save(entity);
  }

  async findAll() {
    return this.repo.find();
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async delete(id: number) {
    return this.repo.delete(id);
  }
}
