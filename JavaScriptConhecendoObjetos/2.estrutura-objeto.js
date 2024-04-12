const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}
//Usando notação de ponto para acessar uma propriedade no objeto estudante.
console.log(estudante.nome)
console.log(`O nome de estudante é ${estudante.nome}`);
//Utilizando substring para pegar partes de uma propriedade String no estudante
console.log(`Os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`);
