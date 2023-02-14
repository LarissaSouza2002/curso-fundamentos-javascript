const notas = [10, 6.5, 8, 7.5, 9, 5.5];

let somaDasNotas = 0;

//           callback / pode-se receber de 1 a 3 elementos - o elemento, o índice e o array atual,
notas.forEach(function (nota, indice, notas) {
    somaDasNotas += nota;
//    console.log(indice);
//    console.log(notas);
})
const media = somaDasNotas / notas.length;

console.log(`a media das notas é = ${media}`);
