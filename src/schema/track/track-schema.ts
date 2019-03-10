const typeDefs = `
    type Track {
        id: ID!
        name: String
        data: String
        length: Int
        author: String
    }
`;

const resolvers = {
    Query: {},
    Mutation: {},
};