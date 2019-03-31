import {getRepository, ObjectType, EntitySchema, Entity} from 'typeorm';

import { Injectable } from "@graphql-modules/di";


@Injectable()
export class DatabaseProvider {
    getRepoByEntity <T>(entityClass: ObjectType<T> | EntitySchema<T> | string){
        return getRepository(entityClass)
    }
}