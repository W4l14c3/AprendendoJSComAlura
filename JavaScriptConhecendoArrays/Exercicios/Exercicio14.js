/**
 * 1 - Faça uma função que aceite vários arrays como argumentos e 
 * retorne um único array contendo todos os elementos dos arrays fornecidos, 
 * utilizando Spread Operator.
 */

//Solução feita usando Spread Operator e ArrowFunction.
console.log("\nAtividade 1 Utilizando Spread Operator:");
const goodPeople = ['@Cudlil', 'ThiagoComT'];
const outherGoodPeople = ['IsabellaallebasI', 'GeovanaanavoeG'];
const amigos = ['LucasGuandalinoVandalisno', 'AlineenilA'];

const todoMundoJunto = (array1, array2, array3 ) => [...array1, ...array2, ...array3]
console.log(todoMundoJunto(goodPeople, outherGoodPeople, amigos));


/**
 * 2 - Crie um array de números chamado valores.
 *  Depois,escreva um programa que some todos os elementos deste array
 *  utilizando o método reduce.
 */

//reduce feito com arrow function
console.log("\nAtividade 2 utilizando o método Reduce:");
const valores = [10, 20, 30, 40 , 50, 55, 60];
const reduce = valores.reduce((acum, ini) => ini + acum, 0);
console.log(`\n Redução do array: ${valores} para: ${reduce}`);


/**
 * 3 - Considere duas listas de cores:
 */
console.log("\nAtividade 3, utiliznado o método Set()");
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const coresUnidas = (lista, lista1) => [...new Set([...lista, ...lista1])]
console.log(coresUnidas(coresLista1, coresLista2));


/**
 * 4 - Escreva uma função que receba um array de números
 *  e retorne um array contendo apenas os números pares.
 */
console.log("\nAtividade 4 retornando array de pares utilizando filter().");
const numeros = [10, 23, 50, 12, 3, 4, 62, 4]
const array_de_pares = numeros.filter((numero) => {if(numero % 2 == 0){return numero}})
console.log("Array original: \n", numeros);

console.log("Array filtrado:\n", array_de_pares);


/**
 * 5 - Crie uma função que filtre os números de um array
 * que são múltiplos de 3 e maiores que 5.
 */
console.log("\nAtividade  5 Filtrando multiplos de 3 e maiores que 5:");
const arrayAle = [20, 10, 47, 17, 3, 12, 45]
const diviPor3 = arrayAle.filter((num3) => {if(num3 % 3 == 0 && num3 > 5){return num3}})
console.log(diviPor3);


/**
 * 6 - Crie uma função que receba um array de números e
 * retorne a soma de todos os elementos.
 */
console.log("\nAtividade 6, soma dos elementos usando o reduce.");
const somaArray = arrayAle.reduce((acum, soma) =>  soma + acum, 0)
console.log(somaArray);