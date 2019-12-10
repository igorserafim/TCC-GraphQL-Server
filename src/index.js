import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import Prontuario from './resolvers/Prontuario'

const resolvers = {
    Query, Mutation, Subscription, Prontuario
}

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', 
    resolvers,
    context: {
        db, pubsub
    }
})

server.start({
    subscriptions: '/subscription',
    endpoint: '/server',
    playground: '/playground'
}, () => console.log('server up')) // porta padrão é 4000