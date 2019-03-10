import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import {userSchemaTuple} from './user/user-schema';

const schemaTuples = [userSchemaTuple];


export default mergeSchemas({
    schemas: schemaTuples.map(([typeDefs, resolvers]) => makeExecutableSchema({
        resolvers,
        typeDefs
    }))
})