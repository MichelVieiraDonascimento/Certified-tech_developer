// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
// nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

const Aluno = require ('./Aluno')

const Curso = {
    nome : 'DH',
    nota_aprovacao : 7,
    faltas_max: 10,
    Alunos : []
}

module.exports = Curso