const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunoseMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (alunoseMedias[0].includes(aluno)) {

//----const alunos = alunoseNotas[0]
//----const medias = alunoseNotas[1]
        
      const [alunos, medias] = alunoseMedias;
      const indice = alunos.indexOf(aluno);

      const mediaDoAluno = medias[indice];

      console.log(`${aluno} está cadastrado e tem a média ${mediaDoAluno}`);
    } else {
        console.log(`Aluno não encontrado!`);
    }
}
exibeNomeENota(`Ana`)
