import {Injectable} from '@graphql-modules/di';

import {UserEntity} from '../../../entity/user';
import { BaseService } from '../../../core/base-service';

@Injectable()
export class UserService extends BaseService<UserEntity> {

  constructor() {
    super(UserEntity);
  }
}
