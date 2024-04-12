const meuNumero = 0;

const primeiroNumero = 1;
const segundoNumro = 2;

const operacaoMatematica = primeiroNumero + segundoNumro;

console.log(operacaoMatematica)

//Ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;
const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// Comportamentos dos tipos

const soma = 10 + 40;
const mult = 10 * 10
const operacao = (soma + mult) + 10;
console.log(operacao)

const temperaturaCelsius = 37;
const convercao = (temperaturaCelsius * 1.8) + 32
//Usando template String para exibir na tela
console.log(`A temperatura ${temperaturaCelsius}Cº convertida para fahrenheit equivale a: ${convercao.toFixed(1)}Fº`)
//toFixed premite arredondar casas decimais de um numero decimal

const texto = "ola mundo" + 90
console.log(texto)