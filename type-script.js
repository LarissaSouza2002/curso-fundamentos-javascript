 // var -> não é recomendada por ser muito solta, muito propensa a bugs/ nao tem regars.
 // let -> permite trocar os valores, mas tem que ser declarada antes de ser utilizada
 //const -> (valor fixo)uma vez declarada o valor fica preso nela, e tambem deve ser declarada antes

 // VAR

    // var altura = 5;
    // var comprimento = 7;

    // area = altura * comprimento;
    // console.log(area)
    // var area;

    //LET

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }
// console.log(area)

//CONST

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
     area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area)