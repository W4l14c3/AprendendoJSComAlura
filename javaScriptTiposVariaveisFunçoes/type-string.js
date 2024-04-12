const texto1 = "Ola mundo!";
const texto2 = `Ola mundo ${texto1}`;


console.log(texto2)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

// \u são caracters de escape para sinalizar ao JavaScript de que
// estamos falando de codigos unicode

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

console.log(texto2.length)
console.log(texto1.toLowerCase())