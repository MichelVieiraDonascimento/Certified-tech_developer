// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e 
// notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá 
// um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

const Aluno = function (nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let media = this.notas.reduce(function (acumulador, item) {
            return acumulador + item
        });
        media = media / this.notas.length
        return media
    },
        this.marcarFalta = function () {
            this.faltas++
        }

    this.aprovacao = function () {
        if (this.notas >= 7) {
            console.log("Aluno Aprovado")
        }
        else if (this.notas < 7) {
            console.log("Aluno Reprovado")
        }
        else {
            console.log("Não há aluno")
        }
        return "Com a nota " + this.notas
    }

}


module.exports = Aluno