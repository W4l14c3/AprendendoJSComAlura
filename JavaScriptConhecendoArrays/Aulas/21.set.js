const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João", "João"]

/**
 * Set é um conjunto, e conjuntos é um tipo de dado que armazena valores unicos.
 * Ao contrario do Array que pode armazenar valores repetidos.
 * Resolvendo um problema de nomes repetidos num array.
 * E os metodos de Array não funcionam na ListaSet.:
 * 
 * const nomesAtualizados = new Set(nomes);
 * nomes Atualizados.push -> não funciona nessa lista.
*/


/**
 * Para  podermos usar as funções de um array temos que transformar essa lista
 * num array da seguinte forma:
 */

const listaNomesAtualizados = [...new Set(nomes)];

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);