function arrayDeNumeros(array = [0]){
    let soma = 0;
    for(let numeros of array){
        soma += numeros;
    }
    return soma;
}
array = [10, 20, 30, 50 ,60, 100]
const result = arrayDeNumeros(array)
console.log(`O resultado da função é: ${result}`);