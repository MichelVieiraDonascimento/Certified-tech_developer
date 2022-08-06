




// ATIVIDADE CONFORME FOI PEDIDO
/*
let operacao = prompt ("Insira a operação matemática: (+, -, *, /) 'EX: 2+4'")

let separador = operacao.split("")
console.log(separador);


if (operacao.includes("+")){
    let separadorp =  operacao.split("+")
    alert ("O resultado é " + (parseInt (separadorp[0]) + parseInt (separadorp[1])))

}else if (operacao.includes("-")){
    let separadorp =  operacao.split("-")
    alert ("O resultado é " + (parseInt (separadorp[0]) - parseInt (separadorp[1])))

}else if (operacao.includes("*")){
    let separadorp =  operacao.split("*")
    alert ("O resultado é " + (parseInt (separadorp[0]) * parseInt (separadorp[1])))

}else if (operacao.includes("/")){
    let separadorp =  operacao.split("/")
    alert ("O resultado é " + (parseInt (separadorp[0]) / parseInt (separadorp[1])))

}else {
    alert ("invalido")
}
*/


// APRIMORAÇÃO
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean (){
    document.getElementById('resultado').innerHTML = ""
}
function calcular () {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else {
        document.getElementById('resultado').innerHTML = "Nada para calcular"
    }
}

