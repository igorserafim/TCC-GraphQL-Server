const Mutation = {
    addHello(parent, { name }, { db, pubsub }, info) {
        const hello = `Hello, ${name}`
        db.ahellos.push(hello)

        pubsub.publish('addHello', { listenAddHello: hello })

        return hello
    }
}

export { Mutation as default }