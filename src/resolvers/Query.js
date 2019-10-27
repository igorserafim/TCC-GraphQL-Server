const Query = {
    hello(parent, args, ctx, info) {
        return `Hello World pra você, ${args.name}`
    }
}

export { Query as default }