
// a média das idades das pessoas que responderam ótimo;

let Filmes = require("./modulos/Filme");


function otimoMedia(Filmes) {
    var soma = 0;
    var qtde = 0;
    for (let i = 0; i < Filmes.length; i++) {
        if (Filmes[i].opiniao === 3) {
            soma += Filmes[i].idade;
            qtde++;
        }
    }
    return (soma / qtde);
};



//a quantidade de pessoas que responderam regular;


function regularQtde(regular) {
    var qtde = 0;

    for (let i = 0; i < regular.length; i++) {
        if (regular[i].opiniao === 1) {
            qtde++;
        }
    }
    return qtde;
};


//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

function bomPorcentagem(bom) {
    var qtde = 0;

    for (let i = 0; i < bom.length; i++) {
        if (bom[i].opiniao === 2) {
            qtde++;
        }
    }
    return (qtde / bom.length) * 100;
};


console.log (otimoMedia(Filmes));

console.log (regularQtde(Filmes));

console.log (bomPorcentagem(Filmes));