




// ATIVIDADE CONFORME FOI PEDIDO

// let operacao = prompt ("Insira a operação matemática: (+, -, *, /) 'EX: 2+4'")

// let separador = operacao.split("")
// console.log(separador);


// if (operacao.includes("+")){
//     let separadorp =  operacao.split("+")
//     alert ("O resultado é " + (parseInt (separadorp[0]) + parseInt (separadorp[1])))

// }else if (operacao.includes("-")){
//     let separadorp =  operacao.split("-")
//     alert ("O resultado é " + (parseInt (separadorp[0]) - parseInt (separadorp[1])))

// }else if (operacao.includes("*")){
//     let separadorp =  operacao.split("*")
//     alert ("O resultado é " + (parseInt (separadorp[0]) * parseInt (separadorp[1])))

// }else if (operacao.includes("/")){
//     let separadorp =  operacao.split("/")
//     alert ("O resultado é " + (parseInt (separadorp[0]) / parseInt (separadorp[1])))

// }else {
//     alert ("invalido")
// }



// APRIMORAÇÃO
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    console.log(numero);
      document.getElementById('resultado').innerHTML = numero + num;  
    
//dcwsd

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

    console.log(resultado);
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
} 





// function somenteNumeros(e) {
//     var charCode = e.charCode ? e.charCode : e.keyCode;
//     // charCode 8 = backspace   
//     // charCode 9 = tab
//    if (charCode != 8 && charCode != 9) {
//        // charCode 48 equivale a 0   
//        // charCode 57 equivale a 9
//        var max = 16;
//        var num = document.getElementById('num');           
            
//        if ((charCode < 48 || charCode > 57)||(num.value.length >= max)) {
//           return false;
//        }
       
//     }
// }
// <input id="num" placeholder="Digite o numero" type="number" onkeypress="return somenteNumeros(event)" required>
