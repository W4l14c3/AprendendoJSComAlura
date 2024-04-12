// INDICE E ELEMENTOS.

function numeroIndice(array = []){
    for(let item of array){
        console.log(`Numero do indice do elemento: ${array.indexOf(item)}`);
        console.log(`Elemento: ${item}`)
    }
}

lista = ['Ola', 'Dude', 'TereiUmaDyna!!', true, 24]

numeroIndice(lista)