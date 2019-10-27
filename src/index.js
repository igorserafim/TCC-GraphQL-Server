import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query'

const resolvers = {
    Query
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql', 
    resolvers
})

server.start({
    subscriptions: '/subscription',
    endpoint: '/server',
    playground: '/playground'
}, () => console.log('server up')) // porta padrão é 4000