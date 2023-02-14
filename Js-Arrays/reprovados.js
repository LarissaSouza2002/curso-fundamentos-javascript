const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})
console.log(reprovados);
//Quando a função callback retorna verdadeiro, o elemento é adicionado no array de retorno, e quando ela retorna falso,
//o elemento é descartado.