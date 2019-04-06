import * as R from 'ramda';
import {validate, ValidationError} from 'class-validator';
import {Repository, BaseEntity, getRepository, ObjectType} from 'typeorm';

import {ServiceValidationError} from './errors/service-validation-error';

export class BaseService<T extends BaseEntity> {
  protected repository: Repository<T>;

  constructor(entity: ObjectType<T>) {
    this.repository = getRepository(entity);
  }

  async validate(entity: ObjectType<T>): Promise<void> {
    const errors: ValidationError[] = await validate(entity);

    if (R.isEmpty(errors)) {
      return;
    }

    throw new ServiceValidationError(errors);
  }
}
