import {Injectable} from '@graphql-modules/di';
import {Connection, Repository} from 'typeorm';

import {UserEntity} from './../../../entities/user';

@Injectable()
export class UserService {
  private repository: Repository<UserEntity>;

  constructor(connection: Connection) {
    this.repository = connection.getRepository(UserEntity);
  }
}
