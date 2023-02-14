const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const tipoSanguineo = ['+O', '-O', 'AB', '-A']

const alunoseMedias = [alunos, medias, tipoSanguineo];

console.log(`A aluna da posição 1 da lista é : ${alunoseMedias[0][1]}
            Sua nota é ${alunoseMedias[1][1]}. E seu tipo sanguineo é ${alunoseMedias[2][1]}`);
// E seu tipo sanguineo é ${alunoseMedias[2][1]}`


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat(
  ["André", "Fernanda"],
  ["Ricardo", "Ana"],
  ["Marcelo", "Bia"]
);

console.log(arrayConcat);
// console.log(arrayOriginal);

const arrayOriginal1 = [50, 60, 70];
const arrayConcat1 = arrayOriginal.concat([80, [90, 100]]);

console.log(arrayConcat1);
// console.log(arrayOriginal);

const funcionarios = [
  ["Ana", "Juliana", "Leonardo"],
  [30, 35, 28],
];