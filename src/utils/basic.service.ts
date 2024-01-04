import { Repository } from 'typeorm';

export class BasicService {
  constructor(readonly repo: Repository<any>) {}

  async create(entity: any) {
    return this.repo.save(this.repo.create(entity));
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, entity: any) {
    delete entity.active;
    return this.repo.update(id, entity);
  }

  remove(id: number) {
    return this.repo.softDelete(id);
  }

  restore(id: number) {
    return this.repo.restore(id);
  }
}
