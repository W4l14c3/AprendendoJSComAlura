const notas = [10, 6.5, 8, 7.5];
let media = 0;

for(i = 0; i < notas.length; i++){
    media += notas[i];
    
}


console.log(`Notas do aluno ${notas}`);
media = media/notas.length;
console.log(`A media das notas é: ${media}`);