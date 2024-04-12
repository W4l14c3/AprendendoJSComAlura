const notas = [10, 9.5, 8, 7, 6];

// Usando function para criar a função:
// const notasAtualizadas = notas.map(function(nota){
//     return nota + 1;
// })

// Usando ArrowFunction para criar função.
const notasAtualizadas = notas.map((nota) =>  nota + 1  >= 10 ? 10 : nota + 1)

console.log(notasAtualizadas);