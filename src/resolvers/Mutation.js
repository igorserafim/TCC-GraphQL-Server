const Mutation = {
    addHello(parent, { name }, { db }, info) {
        const hello = `Hello, ${name}`
        db.ahellos.push(hello)
        return hello
    }
}

export { Mutation as default }