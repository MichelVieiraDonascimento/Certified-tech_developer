/*
Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso 
método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

const Aluno = require ('./modulos/Aluno')
const Curso = require ('./modulos/Curso')

Curso.Alunos.push(new Aluno("Azra", 3, [9]))
Curso.Alunos.push(new Aluno("Xayah", 2, [8]))
Curso.Alunos.push(new Aluno("Rakan", 7, [7]))
Curso.Alunos.push(new Aluno("Avani", 1, [8]))
Curso.Alunos.push(new Aluno("Perséfone", 2, [9]))
Curso.Alunos.push(new Aluno("Ártemis", 0, [9.5]))
Curso.Alunos.push(new Aluno("Afrodite", 7, [9]))
Curso.Alunos.push(new Aluno("Matheus", 3, [9]))
Curso.Alunos.push(new Aluno("Akali", 2, [8]))

// console.log(Curso.Alunos) //Lista de Alunos
// Curso.Alunos[1].marcarFalta() // Marcar Faltas

// console.log( Curso.Alunos[1].faltas ) // Ver as faltas

console.log(Curso.Alunos[0].aprovacao()) // Ver se o aluno foi aprovado ou não