let Curso = require('./curso');

// Adicionar Alunos

Curso.adicionarAluno('Fernando Correa', 1, [10, 9, 9]);
Curso.adicionarAluno('Antonio Martins', 3, [6, 10, 5]);
Curso.adicionarAluno('Camila Gonçalves', 5, [3, 2, 5]);
Curso.adicionarAluno('Geraldo Botelho', 0, [10, 10, 10]);
Curso.adicionarAluno('Carlos Bretas', 1, [10, 7, 6]);
Curso.adicionarAluno('Ricardo Teixeira', 0, [8, 8, 8]);
Curso.adicionarAluno('Rafaela Martins', 2, [8, 10, 6]);
Curso.adicionarAluno('Ana Claudia', 0, [7, 3, 10]);
Curso.adicionarAluno('Bruno Cardoso', 1, [9, 6, 9]);
Curso.adicionarAluno('Thais Abreu', 4, [7, 10, 6]);

// Média dos Alunos

Curso.mediaNotaAlunos(Curso.estudantes);

// Adicionar Falta

Curso.adicionarFalta(Curso.estudantes, 'Thais Abreu');

// Aprovação no Curso

Curso.aprovado(Curso.estudantes, 'Antonio Martins');

// Lista de Aprovação no Curso

Curso.listaAprovacao(Curso.estudantes);