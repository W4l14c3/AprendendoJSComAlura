const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// //forEach com função criada dentro dos parenteses como parâmetro 
// notas.forEach(function(nota){
//     somaDasNotas += nota;
// })

notas.forEach(somaNotas);

function somaNotas(nota){
    somaDasNotas += nota;
}
const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);