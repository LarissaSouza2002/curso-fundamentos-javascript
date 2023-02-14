const nomes = ["lari", "mafa", "rafa"];

// nomes.forEach(function (nome) {
//     console.log(nome);
// });

//--------------------- sintaxe mais usado no Js 
nomes.forEach((nome) =>{
  console.log(nome);
});
//---------------------------------------------

// function imprimeNome(nome) {
//     console.log(nome);
// }
// nomes.forEach(imprimeNome);

//Iterar => é o ato de (repetir) uma função por um determinado período de tempo até que uma condição seja alcançada.

const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}

//1
//3
//5
//7
//9