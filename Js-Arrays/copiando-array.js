//copiando /clonando arrays
// '...' -> spread operator (operador de espalhamento)

const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

// novasNotas.push(10);

console.log(
  `As novas notas sao ${novasNotas} . E as notas originais sao ${notas}`);
// console.log(`As notas originais sao ${notas}`);

//------------------------------------------------------------------------------------

// let numeroOriginal = 10;

// function alteraNumero(numero) {
//   numero = 50;

//   console.log(
//     `numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`
//   );
// }

// alteraNumero(numeroOriginal);