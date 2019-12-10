const prontuarios = require('./db/prontuarios.json')
const evolucao = require('./db/evolucao.json')
const paciente = require('./db/paciente.json')
const db = { prontuarios, evolucao, paciente }

export { db as default }