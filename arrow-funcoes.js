function apresentar(nome) {
    return "meu nome é ${nome}"
}

const apresentarArrow = nome => "meu nome é ${nome}";

const soma = (num1, num2) => num1 + num2;

//arrow com + de 1 linha

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}
//Arrow function, uma função declarada de maneira mais compacta usando uma const. 
//A arrow function também não tem suporte à hoisting.