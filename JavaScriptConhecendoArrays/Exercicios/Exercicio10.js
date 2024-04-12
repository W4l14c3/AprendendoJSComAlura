//Exercicio 4
function menorEMaior(array = []){
    let menor = 0
    let maior = 0
    for(let i = 0; i < array.length; i++){
        if ( array[i] > maior){
            maior = array[i]
        }
        if( array[i] < menor){
            menor = array[i]
        }
    }
    return`O menor número é ${menor} e o maior número é ${maior}`
}

arrayTeste = [140, 20 ,30 ,40, 2, -200]
console.log(menorEMaior(arrayTeste)); 