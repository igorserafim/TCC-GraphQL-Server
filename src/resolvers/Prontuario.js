const Prontuario = {
    evolucao({ id }, args, { db }, info) {
        return db.evolucao.filter((x) => x.idprontuario === id)
    },
    paciente({ paciente }, args, { db }, info) {
        return db.paciente.find((x) => x.id === paciente)
    }
}

export { Prontuario as default }