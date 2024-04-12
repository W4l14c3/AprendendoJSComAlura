const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

// cria um array de arrays
const lista = [alunos, medias];
//Imprime um item de indice0 dentro do primeiro array indice 0
//Impime mais um item de indice 0 do segundo array de indice 1
console.log(lista[0][0],lista[1][0])
console.log(
    `a aluna da posião 1 da lista é ${lista[0][1]}.
    a nota dessa aluna é ${lista[1][1]}`
)