// let x = "";
// console.log(x);
// x = "oi";
// console.log(x);

//1) declara a funcao

// function imprimeTexto(texto) {
//     console.log(texto);
// }
// // //2) executa a funcao (1 ou + vezes)

// imprimeTexto(soma());
// imprimeTexto("tudo bem ?")

// function soma() {
//     // return é a ultima linha da funcao/ deve ser a ultima linha da funcao
//     return 10 + 5;
// }

// ->  sem parâmetro
// function cumprimentar() {
//   console.log("oi gente!");
// }

// cumprimentar();
// // ->  sem parâmetro

//----------------------------------

// //-> com parâmetro
// function cumprimentaPessoa(pessoa) {
//   console.log(`oi, ${pessoa}!`);
// }

// cumprimentaPessoa("Helena");
//-> com parametro
//----------------------------------------

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
}

console.log(operacaoMatematica(15, 30, 45)) // 90

//console.log(soma())

//Math.round(): Faz o arredondamento de um número de ponto flutuante para o inteiro mais próximo.
//EX: Math.round = (5.8) = 6

//Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto.
//EX: Math.ceil(5.2) retorna 6

//Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso.
//EX: Math.floor(5.2) retorna 5

//Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
//EX: Math.trunc(4.3) retorna 4

//Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3).
//Recomenda - se usar a multiplicação por ser mais rápido.
//EX: Math.pow(4 , 2) retorna 4^2 = 16

//Math.sqrt() : Retorna a raiz quadrada de um número.
//EX: Math.sqrt(64) retorna 8

//Math.min(): Retorna o menor valor entre os argumentos.
//EX: Math.min(0, 150, 30, 20, -8, -200) retorna -200

//Math.max(): Retorna o maior valor entre os argumentos.
//EX: Math.max(0, 150, 30, 20, -8, -200) retorna 150

//Math.random(): Retorna um valor randômico entre 0 e 1, então não teremos um valor esperado para receber.
//EX: Math.random() retorna 0.7456916270759015