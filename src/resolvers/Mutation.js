const Mutation = {
    addHello(parent, { name }, { db, pubsub }, info) {
        const hello = `Hello, ${name}`
        db.ahellos.push(hello)

        pubsub.publish('addHello', { listenAddHello: hello })

        return hello
    },
    addProntuario(parent, { data }, { db, pubsub }, info) {
        const prontuario = {
            id: data.id,
            dataentrada: data.dataentrada,
            peso: data.peso,
            sintomas: data.sintomas,
            paciente: data.paciente
        }

        db.prontuarios.push(prontuario)

        pubsub.publish('addProntuario', { listenAddProntuario: prontuario })

        return prontuario
    }
}

export { Mutation as default }