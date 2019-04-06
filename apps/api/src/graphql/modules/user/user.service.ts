import {Injectable} from '@graphql-modules/di';

import {UserEntity} from '../../../entity/user';
import { BaseService } from '../../../core/base-service';


interface IUserService {

}

@Injectable()
export class UserService extends BaseService<UserEntity> {

  constructor() {
    super(UserEntity);
  }

  async add () {
    const user = new UserEntity(
      'Vasiliy',
      'Pupkin'
    );

      await this.repository.save(user);
  }
}
