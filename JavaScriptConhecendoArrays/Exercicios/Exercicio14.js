/**
 * 1 - Faça uma função que aceite vários arrays como argumentos e 
 * retorne um único array contendo todos os elementos dos arrays fornecidos, 
 * utilizando Spread Operator.
 */

//Solução feita usando Spread Operator e ArrowFunction.
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
const valores = [10, 20, 30, 40 , 50, 55, 60];
const reduce = valores.reduce((acum, ini) => ini + acum, 0);
console.log(`\n Redução do array: ${valores} para: ${reduce}`);
