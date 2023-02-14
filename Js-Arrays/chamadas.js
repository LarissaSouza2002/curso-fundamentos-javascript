// const alunos = ['joão', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// // splice -> retirou os nomes das posicoes da lista e ainda pode adicionar um nome ao lugar

// alunos.splice(1, 2, 'Rodrigo');

// //alunos.push('Rodrigo');

// console.log(alunos);

//                    0      1     2     3
animaisDoAquario = ["🐋", "🐙", "🐬", "🦈"];
//                   b      l      g      t

//                   0      1      2     3     4
//                ["🐋", "🐠", "🐙", "🐬", "🦈"]
//                   b     p      l      g     t

//                    0     1      2      3
//                 ["🐋", "🐠", "🐙", "🐟"]
//                    b     p      l     p

// o 1° parametro expecifica em que posicao adicionar ou remover o item
//o 2° define o numero de itens a serem removidos
// o 3° define os novos itens a serem adicionaddos
//---------------- .splice(1°, 2°, 3°);----------------------------

animaisDoAquario.splice(1, 0, "🐠");
animaisDoAquario.splice(3, 2, "🐟");

console.log(animaisDoAquario);