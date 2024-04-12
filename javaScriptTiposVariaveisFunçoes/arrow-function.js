
//Função declarativa
function apresentar(nome){
    return `meu nome é ${nome}`
}

//Função em flexa
const apresentarArrow = nome => `meu nome é ${nome}`;

//Função anonima com flexa
const soma = (num1 , num2) => num1 + num2;

//Arrow mais dee uma linha
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num1 > 10){
        return "somente números de 1 a 9"
    }
    else{
        return num1 + num2;
    }
}