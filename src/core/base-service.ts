import {Repository, BaseEntity, getRepository, ObjectType} from 'typeorm';

export class BaseService<T extends BaseEntity> {
  protected repository: Repository<T>;

  constructor(entity: ObjectType<T>) {
    this.repository = getRepository(entity);
  }
}
