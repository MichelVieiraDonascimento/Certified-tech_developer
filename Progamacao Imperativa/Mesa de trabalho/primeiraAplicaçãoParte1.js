const pessoa = [
    {
        altura: 1.78,
        sexo: "M"
    },
    {
        altura: 1.60,
        sexo: "F"
    },
    {
        altura: 1.65,
        sexo: "F"
    },
    {
        altura: 1.88,
        sexo: "M"
    },
    {
        altura: 1.70,
        sexo: "M"
    },
    {
        altura: 1.73,
        sexo: "F"
    },
    {
        altura: 1.65,
        sexo: "M"
    },
    {
        altura: 1.70,
        sexo: "F"
    },
    {
        altura: 1.71,
        sexo: "M"
    },
    {
        altura: 1.83,
        sexo: "M"
    },
    {
        altura: 1.84,
        sexo: "M"
    },
    {
        altura: 1.78,
        sexo: "M"
    },
    {
        altura: 1.82,
        sexo: "M"
    },
    {
        altura: 1.78,
        sexo: "M"
    },
    {
        altura: 1.97,
        sexo: "M"
    }
];


 console.log(menorAltura)


 pessoa.forEach(function (p){
     if(p.altura > maiorAltura){
         maiorAltura = p.altura;
     }
  });

  console.log(maiorAltura)

 function Altura(pessoa) {

     let maiorAltura = 0;
     let menorAltura = 100;

     for (let i = 0; i < pessoa.length; i++) {
         if (pessoa[i].altura > maiorAltura) {
             maiorAltura = pessoa[i].altura;
         } else if (pessoa[i].altura < menorAltura) {
             menorAltura = pessoa[i].altura;
         }
     }
     return "A maior altura é: " + maiorAltura + ", e a menor altura é: " + menorAltura;
 }
 console.log(Altura(pessoa));

 function mediaSexoF(pessoa){

     let contador=0;
     let mediaAltura=0;   

     for (let i=0; i < pessoa.length; i++){
         if(pessoa[i].sexo == "F"){
             mediaAltura += pessoa[i].altura;
             contador ++;
         }
     }
     let resultado = (mediaAltura/contador);
     return resultado;
 }

 console.log(mediaSexoF(pessoa));

function contadorSexoM(pessoa){
    return pessoa.filter(function(i){
        return i.sexo =="M";
    }).length
}

console.log(contadorSexoM(pessoa));