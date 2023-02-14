// tipo de dado
//booleanos

//conversao implicita

const numero = 456;
const numeroString = "456";

console.log(numero + numeroString)
//console.log(numero + Number(numeroString));

//conversoes explicita

const numero1 = 456;
const numeroString1 = Number("456");

console.log(numero1 + numeroString1);
//console.log(numero + Number(numeroString));

//Number -> usado para transformar uma 'string' em 'numero'
//String -> usado para transformar um 'numero' em 'string'
//toString() -> o toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação
//console.log( + largura * + altura) -> teremos a conversão de String para números realizado usando o + antes das variáveis
//NaN -> (Not a Number, não é número)
 