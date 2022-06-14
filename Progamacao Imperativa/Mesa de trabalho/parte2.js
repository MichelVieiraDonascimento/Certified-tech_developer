
// parte 2

var idades = [18, 20, 25, 17, 40, 35, 39, 58, 65, 28, 21, 41, 14, 80, 12];
var opinioes = [1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3];

function otimoMedia(opinioes, idades) {
    var soma = 0;
    var qtde = 0;
    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 3) {
            soma += idades[i];
            qtde++;
        }
    }
    return (soma / qtde);
}

function regularQtde(opinioes) {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 1) {
            qtde++;
        }
    }
    return qtde;
}

function bomPorcentagem(opinioes) {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 2) {
            qtde++;
        }
    }
    return (qtde / opinioes.length) * 100;
}

console.log("Média de idades que Responderam ÓTIMO é " + otimoMedia(opinioes, idades).toFixed(1) + ".");
console.log("Responderam REGULAR " + regularQtde(opinioes) + " Pessoas.");
console.log("Responderam BOM " + bomPorcentagem(opinioes).toFixed(0) + "% das Pessoas."); 