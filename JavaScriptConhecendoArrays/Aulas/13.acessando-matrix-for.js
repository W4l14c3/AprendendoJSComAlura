const alunos = ['Lucas', 'Carlos', 'Veronica', 'Geovana']
const notas = [10, 6.5, 8, 7.5];

const lista = [alunos, notas];
const [aluno, nota] = lista;

for(i = 0; i < alunos.length; i++){
    console.log(`O aluno ${aluno[i]} ficou com nota: ${nota[i]}\n`); 
}


const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais =  [notas1, notas2, notas3]
let media = 0

for (let i = 0; i < notasGerais.length; i++){ //Percorre o array notasGerais
    for(let j = 0; j < notasGerais[i].length; j++){ // Percorre os arrays selecionados por [i] sendo 0, 1 ou 2.
        media += notasGerais[i][j]/notasGerais[i].length; // vai atribuir a media de cada nota dentro do array. divisão da nota com a quantidade de notas.
    }
}

console.log(`Valor total da somatoria das medias dos arrays notas: ${media}`);
media = media/notasGerais.length // Vai tirar a media dos arrays notas1, notas2, notas3(Dividir a media por 3)

console.log(`Agora mostrando a media dos arrays, notas1: ${notas1}, notas2: ${notas2}, notas3: ${notas3}.`);
console.log(`A media das notas é: ${media}`);