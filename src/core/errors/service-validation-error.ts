import {ValidationError} from 'class-validator';

import {ServiceError} from './service-error';


export class ServiceValidationError extends ServiceError {
  private errors: ValidationError[];

  constructor (errors: ValidationError[]) {
    super();

    this.errors = errors;
  }
}
