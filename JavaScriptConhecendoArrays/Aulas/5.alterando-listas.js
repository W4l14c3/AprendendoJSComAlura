const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie','Leo'];

//Altera  a  lista removendo valores, com um parametro indicando a posição
// outro parametro  indicando o numero de elementos.
//pode também  adcionar outro valor  no lugar.
listaEstudantes.splice(1, 2, 'Rodrigo');
console.log(listaEstudantes);