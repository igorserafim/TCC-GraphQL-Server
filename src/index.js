import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
    type Query {
        hello(name: String): String
    }
`
const resolvers = {
    Query: {
        hello(parent, args, ctx, info) {
            return `Hello World pra você, ${args.name}`
        }
    }
}

const server = new GraphQLServer({
    typeDefs, resolvers
})

server.start({
    endpoint: '/server',
    playground: '/playground'
}, () => console.log('server up')) // porta padrão é 4000