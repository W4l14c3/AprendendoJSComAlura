//Exercicio 1
const nomes = ["ThaisGabriele", "ThiagoRodrigues", "LucasGuandalino", "AlineDaiane", "GeovanaRenata"]
nomes.forEach(nome => {
    return  console.log(nome +"-"+ nomes.indexOf(nome)+ " Você é 10!!");
});

//Exercicio 2
const numeros = [10, 15, 20, 25, 30, 35]
function dobraNumero(num){
    return num * 2
}

function executarOperacaoEmArray(array, funcaocallback){
    return array.map(funcaocallback)// vai retornar um novo array com cada item multiplicado na função callback
}
console.log(executarOperacaoEmArray(numeros, dobraNumero)); 

//Exercicio 3
const nums = [10, 50, 50, 20, 1]
function verificarNum(num){
    let mesage;
   for (let item of nums) {
    if (num == item){
        mesage = `numero escolhido: ${num} seu indice é: ${nums.indexOf(item)}`;
        break;  
    }
    else{
        mesage = -1;
    }
   }
   return mesage;

}
console.log(verificarNum(20));

//Exercicio 4
const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)
function encontraNome(buscando){
    //find com função callback arrow function
    let resultado = todasAsTurmas.find((nome) => nome === buscando)
    return resultado? `O aluno ${resultado} foi encontrado!`:'Nenhum aluno encontrado!'
}

console.log(encontraNome('João Silva')); 

//Exercicio 5

const numeros1 = [6, 9, 12, 15, 18, 21];
numeros1.forEach(num => {return console.log(`Resultado das multiplicação: 3 * ${num} = ${num * 3}`);} )
let indice = numeros1.findIndex(index => index === 18)
console.log(indice);