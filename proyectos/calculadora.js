//Voy a crear una calculadora basica :vvv
function calculadora(op1, x, y) {
//x | y numeros a sumar
let sumar = "suma";
let restar = "resta";
let multiplicar = "multi";
let division = "dividir";

let log = console.log;
    if(op1 == sumar) {
      log(`Estas sumando....\n Resultado de ${x} + ${y}: ${x + y}` )
    }
    else if(op1 == restar) {
        log(`Estas restando....\n Resultado de ${x} - ${y}: ${x - y}`)
    }
}


//ya esta luego la mejoro :vvv
calculadora("suma", 10, 10) // :D ya esta