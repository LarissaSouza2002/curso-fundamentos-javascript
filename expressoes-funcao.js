//declaracao de funcao

function minhaFuncao(param) {
 //   console.log(param);
}
minhaFuncao("param")

//expressao de funcao - nao tem o nome da funcao - anonimas/ oculto

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1))
    
//Hoisting

function apresentar() {
    return "olá";
} 