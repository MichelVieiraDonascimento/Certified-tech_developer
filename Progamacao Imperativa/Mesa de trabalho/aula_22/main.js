let grupo = require('./grupo')

// console.log(grupo) 

// 1 a maior e a menor altura do grupo;
function altura(grupo) {

    let maiorAltura = 0;
    let menorAltura = 100;

    for (let i = 0; i < grupo.length; i++) {
        if (grupo[i].altura > maiorAltura) {
            maiorAltura = grupo[i].altura;
        } else if (grupo[i].altura < menorAltura) {
            menorAltura = grupo[i].altura;
        }
    }
    return "A maior altura é: " + maiorAltura + ", e a menor altura é: " + menorAltura;
}

console.log (altura(grupo));


//a média de altura das mulheres;

function mediaM (grupo) {
    let mulher = 0, altu = 0
    for (let i=0;i<grupo.length;i++){
        if ( grupo[i].sexo == "F") {
            altu += grupo[i].altura
            mulher ++
        }
    }
    let media = (altu/mulher). toFixed(2);
    return media;
};console.log (mediaM(grupo));



//o número de homens.



function numeroHomens(homem) {
    return homem.filter (function(qnt){
        return qnt.sexo=="M"
    }).length
}

console.log(numeroHomens(grupo));