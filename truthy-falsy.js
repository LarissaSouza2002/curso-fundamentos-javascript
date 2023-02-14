// boolean
const usuarioLogado = true
const contaPaga = false

// truthy ou falsy

// 0=> falsy / flase
// 1=> true / truthy

//Js considera esses valores abaixo como tipo falso
console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// Os dois tem efeitos praticamente iguais
// Null => vazio ou nada - nao tem valor nenhum
// Undefined => nao teve um valor atribuido

let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = "alura";

// Typeof é uma palavra chave para verificar qual o tipo de dado está sendo guardada nessa variavel!!!
console.log(typeof minhaVar)
console.log(typeof varNull)
