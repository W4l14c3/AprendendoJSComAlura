// Exercicio 1

function exer_concatenar(array1=[], array2=[]){
    console.log(cumprirmentos, pessoas)
    console.log('Concatenando duas arrays')
    array_concatenado = array1.concat(array2);
    console.log(array_concatenado)
}

const cumprirmentos = ['Ola, mundo!', 'Hello world']
const pessoas = ['Veronica', 'Thais']
//exer_concatenar(cumprirmentos, pessoas)

// Exercicio 2
numeros = [1,2,3,4,5,6,7,8,9,10]
function exerc_slice (num1 = []){
    console.log(numeros)
    console.log('')
    arrayCortado = num1.slice(3, 7)
    console.log('Array numeros com o slice: ')
    console.log(arrayCortado)
}

//exerc_slice(numeros)

// Exercicio 3

const frutas = ['Maçãs', 'Banana','Laranja', 'Limão', 'Abacaxi']
function exer_splice (array = []){
    console.log('\n')
    console.log('Array frutas antes da edição: ')
    console.log(frutas)
    console.log('\n')
    array.splice(2, 3, 'Kiwi', 'Pêssego')
    console.log('Array frutas editado: ')
    console.log(array)
}

//exer_splice(frutas)

// Exercicio 4
function menus_opcoes(){
    menu_principal = ['Menu Principal', '1-Lasanha', '2-Pizza', '3-FrangoGrelhado', '4-Tilapia', '5-Calabresa', '6-Carbonara']
    menu_sobremesa = ['Menu Sobremesa', '1-Bolo de morango', '2-MilkChake', '3-Sorvete', '4-Fundie']
    console.log(menu_principal)
    console.log(menu_sobremesa)
    menu_completo = menu_principal.concat(menu_sobremesa)

    console.log('Menu Completo: ')
    console.log(menu_completo)
}

//menus_opcoes()

// Exercicio 5
const matriz = []
let valor = 1
for (let i = 0;  i < 3; i++) {      //For que define onde  vai ser criado o linha ate 3
    let linha = [];                 //Cria a array linha que vai receber os 3 elementos
    for (let j = 0;  j < 3; j++){   //For que carrega a linha com os 3 elementos
        linha.push(valor++)         //A linha recebe o incremento da variavel valor.
        
    }
    matriz.push(linha)              //A matriz puxa a array linha com os elemetos.
}
console.log('Matriz Bidimensional')
console.log(matriz)
console.log('Elemento da segunda linha e terceira coluna')
console.log(matriz[1][2])

matriz[2][1] = 15
console.log('Matriz após adição do elemento: ', matriz)