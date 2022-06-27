/*
Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.

Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).
*/

let Aluno = require('./estudantes');

let Curso = {
    nomeCurso: 'JavaScript',
    notaAprovacao: 7,
    faltasMaxima: 4,
    estudantes: [],
    adicionarAluno: (nome, faltas, notas) => {
        Curso.estudantes.push(new Aluno(nome, faltas, notas))
    },
    mediaNotaAlunos: obj => {
        let arrayMedias = obj.map(e => e.calcularMedia());
        let somaMedias = 0;
        for (let i = 0; i < arrayMedias.length; i++) {
            somaMedias += arrayMedias[i] / arrayMedias.length;
        };
        console.log(`A média total de notas dos alunos é ${somaMedias.toFixed(2)}.`);
    },
    adicionarFalta: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        console.log(`O aluno ${nome} tem ${aluno[0].faltas} falta(s).`)
        aluno[0].adiconarFaltas()
        console.log(`Adicionada falta para o aluno ${nome}. Número de falta(s) atual: ${aluno[0].faltas}.`)
    },
    aprovado: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        let mediaAluno = aluno.map(e => e.calcularMedia());
        mediaAluno = mediaAluno[0].toFixed(2)
        let faltaAluno = aluno.map(e => e.faltas)
        if (mediaAluno >= Curso.notaAprovacao && faltaAluno < Curso.faltasMaxima
            ||
            faltaAluno == Curso.faltasMaxima && mediaAluno > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
            console.log(`O aluno(a) ${nome} foi aprovado(a). Média: ${mediaAluno} / Faltas: ${faltaAluno}`);
        } else {
            console.log(`O aluno(a) ${nome} foi reprovado(a). Média: ${mediaAluno} / Faltas: ${faltaAluno}`);
        };
    },
    listaAprovacao: obj => {
        let listaAprovacao = [];
        obj.map(e => {
            if (e.calcularMedia() >= Curso.notaAprovacao && e.faltas < Curso.faltasMaxima
                ||
                e.faltas == Curso.faltasMaxima && e.calcularMedia() > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
                listaAprovacao.push(`${e.nome}: Aprovado`);
            } else {
                listaAprovacao.push(`${e.nome}: Reprovado`);
            }
        });
        console.log(listaAprovacao);
    }
};

module.exports = Curso;