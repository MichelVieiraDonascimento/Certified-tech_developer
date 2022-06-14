const pessoa = [
    {
        altura:1.82,
        sexo:"M"
    },
    {
        altura:1.75,
        sexo:"F"
    }, 
    {
        altura:1.78,
        sexo: "M"
    },
    {
        altura:1.50,
        sexo:"F"
    },
    {
        altura:1.65,
        sexo:"F"
    },
    {
        altura:1.88,
        sexo:"M"
    },
    {
        altura:1.70,
        sexo:"M"
    },
    {
        altura:1.73,
        sexo:"M"
    },
    {
        altura:1.73,
        sexo:"F"
    },
    {
        altura:1.65,
        sexo:"M"
    },
    {
        altura:1.70,
        sexo:"F"
    },
    {
        altura:1.71,
        sexo:"M"
    },
    {
        altura:1.83,
        sexo:"M"
    },
    {
        altura:1.84,
        sexo:"M"
    },
    {
        altura:1.78,
        sexo:"M"
    }
]

let mulheres = pessoa.filter ( function (num) {
    return num = (pessoa.sexo === "F"  )
})

console.log (mulheres)
    


// function altura (altura) {
//     let alturaMan = []
//     let alturaGirl = []
//     let resposta = []
// }

// for (let i=0; i <altura.length; i++) {
//     if (altura[i].sexo === "F") {
//         alturaGirl.push (altura[i].altura)
//         console.log ()
//     }else {
//         alturaMan.push(altura[i].altura)
//     }
// }





// prof

let menorAltura = 100;
let maiorAltura = 0;

pessoa.forEach(function(p){
    // console.log(p.altura)
    if (p.altura < menorAltura) {
        menorAltura = p.altura
    }
});
console.log(menorAltura)