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
        resultado = "π§π§π§π§π§π§π§"
      break;
      case "aguacate":
        resultado = "π€π₯?"
      break;
      case 'vaca':
        resultado = 'muuuuuuuuuuuuuuu'
      break;
      case '1972':
        resultado = '|   PONG  .|'
      break;
      case '2014':
        resultado = 'ππPLATZIππ'
      break;
      case 'daredevil':
        resultado = 'πΊπ€πΉπ€π¨βπ¦²'
      break;
      case 'the strokes':
        resultado = 'β‘πΈπ€ππΈπ'
      break;
      case 'the cube':
        resultado = 'β¬β¬π€?'
      break;
      case 'banjo kazooie':
        resultado = 'πͺπ»πͺπ¦'
      break;
      case 'dark':
        resultado = 'no entendi Β―\(Β°_o)/Β―'
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