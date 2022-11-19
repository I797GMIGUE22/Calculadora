//parseInt() = transforma un tipo cadena de texto a un entero
//Suma, resta, multiplicacion y division
let resultado

function desicion(d) {
  return parseInt(prompt(d))
}

function funciona() {
  if((operator == "mas")||(operator == "sumar")||(operator == "plus")||(operator == "add")||(operator == "mais")||(operator == "adicionar")||(operator == "+")){
    resultado = num1 + num2
    
  }
  else if((operator == "menos")||(operator == "restar")||(operator == "subtract")||(operator == "minus")||(operator == "subtrair")||(operator == "-")){
    resultado = num1 - num2
    
  }
  else if((operator == 'multiplicar')||(operator == 'por')||(operator == 'veces')||(operator == "multiply")||(operator == "times")||(operator == 'vezes')||(operator == "*")){
    resultado = num1 * num2
    
  }
  else if((operator == 'dividir')||(operator == 'entre')||(operator == 'divide')||(operator == "divided by")||(operator == 'dentre')){
    resultado = num1 / num2
    
  }
  else{
    switch(operator){
      case "115":
        resultado = "🧟🧟🧟🧟🧟🧟🧟"
      break;
      case "aguacate":
        resultado = "🤔🥑?"
      break;
      case 'vaca':
        resultado = 'muuuuuuuuuuuuuuu'
      break;
      case '1972':
        resultado = '|   PONG  .|'
      break;
      case '2014':
        resultado = '💚💚PLATZI💚💚'
      break;
      case 'daredevil':
        resultado = '👺🤛👹🤜👨‍🦲'
      break;
      case 'the strokes':
        resultado = '⚡🎸🎤🔋🎸🔊'
      break;
      case 'the cube':
        resultado = '⬛⬜🤔?'
      break;
      case 'banjo kazooie':
        resultado = '🪕🐻🪗🐦'
      break;
      case 'dark':
        resultado = 'no entendi ¯\(°_o)/¯'
      break;
      default:
        resultado = '///ERROR///'
      break;
    }
  }
}

num1 = desicion("1st digito =:")
operator = prompt("Operador =:")
num2 = desicion("2nd digito =:")

funciona()
console.log(resultado)