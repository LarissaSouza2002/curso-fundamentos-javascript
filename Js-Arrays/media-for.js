// CALCULANDO A MEDIA COM FOR - TRADICIONAL
//SINTAXE MAIS COMPLEXA
// i = INDICE

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A media das notas é ${media}!`);
//console.log(somaDasNotas);

//------------------------------------------------------------
//PERCORRER UM ARRAY DO FIM AO INÍCIO

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

//-------------------------------------------------------------

// const notas1 = [10, 6.5, 8, 7.5];
// const notas2 = [9, 6, 6];
// const notas3 = [8.5, 9.5];

// const notasGerais = [notas1, notas2, notas3];
// let media = 0;

// for (let i = 0; i < notasGerais.length; i++) {
//   for (let j = 0; j < notasGerais[i].length; j++) {
//     media += notasGerais[i][j] / notasGerais[i].length;
//   }
// }
// media = media / notasGerais.length;
// console.log(media);