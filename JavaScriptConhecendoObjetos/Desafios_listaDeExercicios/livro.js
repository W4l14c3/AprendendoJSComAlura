//Funções:
function imprimeLivro(objeto) {
    
    const mostrarDetalhes = `\n\nDetalhes do produto: \n\nTitulo: ${objeto['titulo']}, \nAutor: ${objeto['autor']}, \nAno De Publicação: ${objeto['anoPublicacao']}, \nGenero: ${objeto['genero']}, \nIdade da publicação: ${objeto['idadePublicacao']} anos, \nDetalhes: ${objeto['detalhes']}, \nAvaliação: ${objeto['avaliacao']}`;

    console.log(mostrarDetalhes);
};

function verificaAvaliacao(objeto){
    // objeto.avaliacao === null? objeto['avaliacao'] = 0.0: console.log("\nO livro ja foi avaliado.");

    if (objeto.avaliacao !== null && objeto.avaliacao !== undefined){

        console.log("\nO livro ja foi avaliado!");
    }
    return objeto.avaliacao = 0.0;
 };
 

//Objetos:
//Exercicio 1
const livro = {
    titulo: "Meridiano de sangue",
    autor: "Cormac McCarthy",
    anoPublicacao: 2020,
    genero: "romance épico"
};

livro.detalhes = "Meridiano de sangue é um romance épico. Nele, McCarthy reinventa a mitologia do Oeste americano para criar uma obra ao mesmo tempo grandiosa e arrebatadora sobre uma terra sem lei, em que o absurdo e a alucinação se sobrepõem à realidade."

const anoAtual = new Date().getFullYear();

//Exercicio 2
const livro2 = {
    titulo: "Código limpo: habilidades práticas do Agile software",
    autor: "Robert C. Martin",
    anoPublicacao: 2009,
    genero: "Tecnologia"
};

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;



//Exercicio 3.Usando a função de impressão com variavel detalhes acesso com colchetes.
imprimeLivro(livro);
imprimeLivro(livro2);

const livro3 = {
    titulo: "Sobre a utilidade e a desvantagem da história para a vida",
    autor: "Friedrich Nietzsche",
    anoPublicacao: 1874,
    genero: "Filosofia",
    
};
livro3.idadePublicacao = anoAtual - livro3.anoPublicacao;

verificaAvaliacao(livro3);
imprimeLivro(livro3);

//Exercicio 4

const livro4 = {
    titulo: "Epaminondas: O gato explicador",
    autor: "Clóvis de Barros Filho",
    anoPublicacao: 2022,
    genero: "Filosofia",
    idadePublicacao: 0,
    avaliacao: 4.7
};

livro4.idadePublicacao = anoAtual - livro4.anoPublicacao;

imprimeLivro(livro4);
verificaAvaliacao(livro4);

//Exercicio 5

const livro5 = {
    titulo: "Tintim - Tintim no País dos Sovietes",
    autor: "Hergé",
    anoPublicacao: 2008,
    genero: "Ação",
    idadePublicacao: 0,
    avaliacao: 4.7
};
livro5.genero = "Aventura";
livro5.idadePublicacao = anoAtual - livro5.anoPublicacao;

imprimeLivro(livro5);
verificaAvaliacao(livro5);

//Exercicio 6

const livro6 = {
    titulo: "Programação Funcional Para Desenvolvedores Java",
    autor: "Dean Wampler",
    anoPublicacao: 2012,
    genero: "Programação de Computadores",
    idadePublicacao: 0,
    avaliacao: null
}
verificaAvaliacao(livro6);
imprimeLivro(livro6);

delete livro6.avaliacao;
imprimeLivro(livro6)