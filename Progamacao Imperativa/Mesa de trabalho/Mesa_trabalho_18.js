

//1. Loop de Pares

function par(soma){
    for (let i=0; i <=100; i++ ) {
        let retorno = i + soma    
        console.log(retorno % 2 === 0 ? (i) + " é par" : (i))
}
}

par(7)

//2. Loop ímpares com palavra

function loopDeImpares (num, palavra)  {
    for (let i=0; i<=100; i++) {
       console.log ( (i+num) % 2 === 1 ? (i) +" " + palavra : (i)  ) 
    }
};

loopDeImpares (3, "Michel");


// 3. Soma

function soma(numero){
    if( numero > 0){
        numero = numero + soma (numero - 1)
    }
    return numero
};


 console.log(soma(8));


 // 4. Novo Array

 function newArray(numeros) {
    novoArray = []
    for (let i=1; i <= numeros; i++) {
        novoArray.push(i)
    }
    return novoArray
 };

 console.log (newArray(50));


 // 5. String.split()

 function split(palavra) {
    return palavra.split("")
 };

 console.log (split("arroz"));

 // 6. Mover os zeros para o final

 function moverZeros([]) {
    arrayZero = []
    

 }

 console.log ([0,8,10,0,4,2,0,0,1,3,6,]);



