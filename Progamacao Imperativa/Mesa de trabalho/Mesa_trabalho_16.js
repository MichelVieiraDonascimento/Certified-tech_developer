//EXERCICIO 1

function FizzBuzz(a, b) {
    for (let i = 0; i <= 100; i++) {
      if (i % a === 0 && i % b === 0) {
        console.log("FizzBuzz");

      } else if (i % a === 0) {
        console.log("Fizz");

      } else if (i % b === 0) {
        console.log("Buzz");

      } else {
          console.log (i)
      }
    }
  }
  
  FizzBuzz(3, 8);





//EXERCICIO 2



let FATORIAL01 = (n) => {
    let fatorial = 1;

    if(n === 0){   
      return console.log(fatorial);
      
    } else {
    
      for (let i = n; i > 1 ; i--) {
        fatorial *= i;
      }
    
    return console.log(fatorial);
 
    }
}

FATORIAL01 (5);




let FATORIAL02 = n => {
    
    if (n == 0 || n == 1) {
        return 1;

    } else if (n > 1) {
        return n * FATORIAL02(n - 1);

    } else {
        return "Não existe fatorial negativo!";
    } 
}

console.log(FATORIAL02 (-8));