import {gql} from 'apollo-server';


//Schema
const typeDefs = gql`

    type Query {
        #Users
        getUser(input:String!): User
        bestSellers: [TopSeller]

    }
    type Mutation {

        #Users
        newUser(input: UserInput): User
        authUser(input: AuthInput): Token

    }
`;

export default typeDefs;