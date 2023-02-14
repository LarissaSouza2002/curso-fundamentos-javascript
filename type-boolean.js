const num1 = 5;
const num2 = 9;

console.log(num1 === num2)

const num3 = 9;
const num4 = 9;

console.log(num3 === num4);

// diferença entre - let e const
//cadastroAtivado = true;
//(===)-> tem que ser do mesmo tipo e valor
// (==)-> tem que ter o mesmo valor
//(||)-> Operador “ou”, retorna true caso uma condição seja válida;
//(&&)-> Operador “e”, retorna true somente se todas as condições forem válidas;
//(!=) e (!==)-> Operadores “não igual” e “estritamente não igual”, utilizados para comparação, 
//da mesma forma que == e === retornam true ou false.


const cidade = "Belo Horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";
const input1Minusculo = input.toLowerCase();

console.log(cidade1 === input1Minusculo);

const senha1 = "minhasenhae15963";
console.log(senha1.length);