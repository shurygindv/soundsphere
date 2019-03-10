const typeDefs = `
    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
    }
`;

const resolvers = {
    Query: {},
    Mutation: {},
};


export const userSchemaTuple = [typeDefs, resolvers];