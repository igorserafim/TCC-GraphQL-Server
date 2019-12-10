const Query = {
    allProntuario(parent, args, { db }, info) {
        return db.prontuarios
    },
    allPaciente(parent, args, { db }, info) {
        return db.paciente
    },
    allEvolucao(parent, args, { db }, info) {
        return db.evolucao
    },
    searchProntuario(parent, args, { db }, info) {
        return db.prontuarios.find(x => x.id === args.id)
    }
}

export { Query as default }