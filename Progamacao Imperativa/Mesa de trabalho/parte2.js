
// parte 2

const espectador = [
    {
        idade: 18,
        opiniao: 2
    },
    {
        idade: 28,
        opiniao: 1
    },
    {
        idade: 15,  opiniao: 3
    },
    {
        idade: 22,  opiniao: 1
    },
    {
        idade: 82,  opiniao: 2
    },
    {
        idade: 31,  opiniao: 2
    },
    {
        idade: 19,  opiniao: 3
    },
    {
        idade: 25,  opiniao: 3
    },
    {
        idade: 41,  opiniao: 1
    },
    {
        idade: 17,  opiniao: 3
    },
    {
        idade: 30,  opiniao: 2
    },
    {
        idade: 36,  opiniao: 1
    },
    {
        idade: 13,  opiniao: 1
    },
    {
        idade: 45,  opiniao: 3
    },
    {
        idade: 25,  opiniao: 2
    }
];

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