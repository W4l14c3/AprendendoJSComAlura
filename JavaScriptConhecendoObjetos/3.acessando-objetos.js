const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante){
    return `exibeInfoEstudante ${infoEstudante}: ${objEstudante[infoEstudante]}`;
}
//Acessando objeto estudante pela função exibeInfoEstudante
console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, ['cpf']));

//Acessando objeto diretamente com notação em colchetes ou ponto.
console.log(`\nResposta usando notação de colchetes:\nidade: ${estudante['idade']}`);
console.log(`Resposta usando notação de ponto:\nturma: ${estudante.turma}`);
