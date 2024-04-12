const notas = [7, 7, 8, 9];

//Metodo de clonagem usando concat.
//const novaListaNotas = notas.concat(10);

/**
 * Usando spread operator.
 * Funciona como se estivessemos espalhando "Abrindo o Array",
 * para passar um novo valor.
*/
const novaListaNotas = [...notas, 10];
/**
 * Nesse caso podemos usar o Push para atribuir mais um valor
 * Ou usar uma maneira mais curta e simples na linha 7.
 * Passando o valor desejado após uma virgula.
 */


// novaListaNotas.push(10);

/**
 * Abaixo criamos uma referencia ao Array notas.
 * Usando o push, passamos um novo valor a var referencia e ao original.
 * Por exemplo:
 * 
 * const novaListaNotas = notas;
 * novaListaNotas.push(10);
*/
console.log(notas);
console.log(novaListaNotas);