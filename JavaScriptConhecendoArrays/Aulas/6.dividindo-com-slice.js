const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara',
 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos',
 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata',
 'Daisy', 'Camilo'];
console.log(listaEstudantes.length)

//Slice com inicio e final definido, o final não é incluido no corte(Slice)
 const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
 //Slice com inicio definido mas sem o final, vai até o ultimo valor da array.
 const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

 console.log(sala1);
 console.log(sala2)