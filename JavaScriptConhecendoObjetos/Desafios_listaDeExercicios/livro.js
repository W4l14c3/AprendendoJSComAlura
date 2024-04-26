//Função que espera o objeto e imprime as propriedades pré-definidas.
function imprimeLivro(objeto) {
    console.log(`\n\nDetalhes do produto: \n\nTitulo: ${objeto['titulo']}, \nAutor: ${objeto['autor']}, \nAno De Publicação: ${objeto['anoPublicacao']}, \nGenero: ${objeto['genero']}, \nIdade da publicação: ${objeto['idadePublicacao']}, \nDetalhes: ${objeto['detalhes']}`);
};

//Objetos:
//1
const livro = {
    titulo: "Meridiano de sangue",
    autor: "Cormac McCarthy",
    anoPublicacao: 2020,
    genero: "romance épico"
};

livro.detalhes = "Meridiano de sangue é um romance épico. Nele, McCarthy reinventa a mitologia do Oeste americano para criar uma obra ao mesmo tempo grandiosa e arrebatadora sobre uma terra sem lei, em que o absurdo e a alucinação se sobrepõem à realidade."

const anoAtual = new Date().getFullYear();

//2
const livro2 = {
    titulo: "Código limpo: habilidades práticas do Agile software",
    autor: "Robert C. Martin",
    anoPublicacao: 2009,
    genero: "Tecnologia"
};

livro2.idadePublicacao = anoAtual -  livro2.anoPublicacao;

//Usando a função de impressão.
imprimeLivro(livro2);
imprimeLivro(livro);