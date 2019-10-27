import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

const resolvers = {
    Query, Mutation
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', 
    resolvers,
    context: {
        db
    }
})

server.start({
    subscriptions: '/subscription',
    endpoint: '/server',
    playground: '/playground'
}, () => console.log('server up')) // porta padrão é 4000