const Query = {
    hello(parent, args, ctx, info) {
        return `Hello World pra você, ${args.name}`
    },
    searchHello(parent, args, { db }, info) {
        return db.ahellos
    },
    allProntuario(parent, args, { db }, info) {
        return db.prontuarios
    },
    allPaciente(parent, args, { db }, info) {
        return db.paciente
    },
    allEvolucao(parent, args, { db }, info) {
        return db.evolucao
    }
}

export { Query as default }