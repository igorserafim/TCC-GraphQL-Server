const Query = {
    hello(parent, args, ctx, info) {
        return `Hello World pra você, ${args.name}`
    },
    searchHello(parent, args, { db }, info) {
        return db.ahellos
    }
}

export { Query as default }