const pessoa = {
    cudlil:{
        nome: "cudlil",
        idade: 19,
        cpf: 111222333,
        email: "cudlil@gmail.com"
    },

    thiago:{
        nome: "Thiago ",
        idade: 20,
        cpf: 111222444,
        email: "Thiagod@gmail.com"
    },

    lucas:{
        nome: "Lucas ",
        idade: 19,
        cpf: 1122233300,
        email: "Lucasguanda@gmail.com"
    },

    aline:{
        nome: "Aline Diane",
        idade: 20,
        cpf: 11220030,
        email: "alined@gmail.com"
    }

}
// Para adcionar mais uma pessoa ao objeto pessoa, criamos o objeto wallace com sua propriedades.
pessoa.wallace = {nome : "wallace", idade: 20, cpf: 1123340, email: "wallace@gmail.com"};

//Exibindo cada propriedade/objeto aninhado, dentro do objeto pessoa.
console.log(pessoa.cudlil);
console.log(pessoa.lucas);
console.log(pessoa.wallace);

