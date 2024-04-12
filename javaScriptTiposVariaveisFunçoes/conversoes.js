// tipo de dado
// booleanos

//conversão implicita
const numero = 456;
const numeroString = "456"

console.log(`comparação de ${numero} com $ ${numeroString} string  sem conversão usando === : ${numero === numeroString}`)
console.log(`comparação de ${numero} com ${numeroString} string usando conversão implicita usando == : ${numero == numeroString}`)

console.log("\nConcatenando: ")
console.log(numero + numeroString)

//conversão explicita
//Number()
//String()
console.log("\nConvertendo e somando usando a função Number(): ")
console.log(numero + Number(numeroString))

//Const teste

const teste1 = 3.14
console.log(teste1)
{
    const teste1 = 3.15
    console.log(teste1)
}



//Let declarado dentro de um escopo so existe dentro do escopo
//Porem se uma let é declarada fora do escopo, ela pode ser alterada de dentro do
//escopo e sua alteração sera refletida para fora. Veja o Exemplo abaixo:


//Let sendo alterada dentro do escopo
console.log("\nLet sendo alterada dentro do escopo:")
let teste2 = "ola"
{
    teste2 = "chau" 

    console.log("Teste dentro de um escopo: " + teste2)
}
console.log("Teste na main: " + teste2)
console.log("\n")

//Let sendo declarado dentro do escopo e fora: 
console.log("Let sendo declarado dentro do escopo e fora: ")
let teste3 = "ola"
{
    let teste3 = "chau" 

    console.log("Teste dentro de um escopo: "+teste3)
}
console.log("Teste na main: " + teste3)


//Var sendo declarada fora e alterada dentro do escopo:
console.log("\nVar sendo declarada fora e alterada dentro do escopo: ")
var teste4 = "Ola mundo"
{
    teste4 = "OLA MUNDINHO!"
    console.log("Teste de alterção dentro do escopo: " + teste4)
}
console.log("teste do resultado fora do escopo: " + teste4)

//Var declarada dentro do escopo e fora:
console.log("\nVar sendo declarada dentro do escopo e fora")
var teste4 = "Ola mundo"
{
   var teste4 = "OLA MUNDINHO!"
    console.log("Teste de alterção dentro do escopo: " + teste4)
}
console.log("teste do resultado fora do escopo: " + teste4)

//Var declarada dentro do escopo e fora:
console.log("\nVar sendo alterada dentro do escopo e declarada dentro do escopo")
teste4 = "Ola mundo"
{
   var teste4 = "OLA MUNDINHO!"
    console.log("Teste de alterção dentro do escopo: " + teste4)
}
console.log("teste do resultado fora do escopo: " + teste4)