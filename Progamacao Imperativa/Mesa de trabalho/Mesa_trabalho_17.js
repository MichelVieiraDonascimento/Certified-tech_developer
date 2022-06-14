// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os 
// valores divididos pela soma de toda a matriz, usando map() e reduce().



const matriz = [1,2,3,4,5]

let soma = matriz.reduce ( function (acumulador, somar) {
    return acumulador + somar
});

console.log (soma)

let divisao = matriz.map(function (x){
    return x / soma
});


// Crie uma função que receba um array de palavras e um  número, e que retorna uma matriz (array) com apenas as 
// palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como   funciona o método filter ())

const palavras = ["pao", "carro", "avião", "pedra", "otorrinolaringologista"]

let calculo = palavras.filter(function (palavras, num) {
    return palavras.length > num
});



console.log (calculo);