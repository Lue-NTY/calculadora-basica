colors = require("colors")
prompt = require('prompt-sync')();
console.log(`
_____________________________________________________
|                                                    |
|                                                    |
|          INICIANDO CALCULADORA.....                |\n|            V.0.0.1b                                |
|____________________________________________________|`.green)
//Calcladora basica
let log = console.log;
    let operador = parseInt(prompt("Inserte Una opcion 1- sumar .. suma  ||  2 - restar .. resta  ||  3 - multiplicar .. multi 4 -  dividir  || divide: "))
    let primerNumero = parseInt(prompt("Inserte un numero: ".cyan))
    let segundoNumero = parseInt(prompt("inserte el segundo numero: ".green))

function calculadora(op1, x, y) {
//x | y numeros a sumar


    if(op1 === 1) {
      log(`Estas sumando....\n Resultado de ${x} + ${y}: ${x + y}`.cyan)
    }
    else if(op1 === 2) {
        log(`Estas restando....\n Resultado de ${x} - ${y}: ${x - y}`.blue)
    }
    if(op1 === 3) {
      log(`Estas Multiplicando....\n Resultado de ${x} * ${y}: ${x * y}`.black)
    }
    else if(op1 === 4) {
      log(`Estas dividiendo......\n Resultado de ${x} / ${y}: ${x / y}`.grey)
    }else if(op1 >= 5){
        log(`\n
         ____________________________________________________
        |                                                    |
        |Sobrepasaste las opciones no existe la opcion ${op1}    |
        |____________________________________________________| \n\n 
          ___________________________
         |                           | 
         | Elige una opcion valida   |\n         |   ${op1} No es una opcion     |
         |___________________________|`.red) 
    }

    log(`
  _________________________
  C
   A
    L
     C
      U
       L 
        A
         D
          O
           R
            A
            FINALIZADA
  ________________________`.green
          )
}


//ya esta luego la mejoro :vvv
calculadora(operador, primerNumero, segundoNumero) // :D ya esta
