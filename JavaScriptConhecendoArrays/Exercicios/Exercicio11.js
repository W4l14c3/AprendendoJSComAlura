//Exercicio 5
const numeros = [3, 8, 12, 5, 6, 10, 7, 2 ,9 ,14];
const pares = [];
const impares = [];

for (let numero of numeros){
    if (numero %2 == 0){
        pares.push(numero)  
    }
    else{
        impares.push(numero)
    }
}
console.log("Numeros pares encontrados no array:");
console.log(`Pares: ${pares}`);
console.log("Numeros impares encontrados no array:");
console.log(`Impares: ${impares}`);
