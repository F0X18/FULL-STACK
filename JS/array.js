// buena práctica
const coches1 = ['Saab', 'Volvo', 'BMW'];
// mala práctica
const coches2 = new Array('Saab', 'Volvo', 'BMW');
// buena práctica
const coches3 = [];
// mala práctica
const coches4 = new Array();
const datos = [23, 'Volvo', true];
const frutas = ['Banana', 'Orange', 'Apple', 'Mango'];
// true
console.log(Array.isArray(frutas));
// true
console.log(frutas instanceof Array);
const coches20 = ['Saab', 'Volvo', 'BMW'];
// Saab
console.log(coches20[0]);
const frutas1 = ['Banana', 'Orange', 'Apple', 'Mango'];
const lon = frutas1.length;
// for clásico
for (let i = 0; i < lon; i++) {
console.log(frutas[i])
}
// for...of
for (let fruta of frutas) {
console.log(fruta)
}
const coches10 = ['Saab', 'Volvo', 'BMW'];
// 3
console.log(coches10.length);
const frutas11 = ['Banana', 'Orange', 'Apple', 'Mango'];
// Banana,Orange,Apple,Mango
console.log(frutas11.toString());
const frutas12 = ['Banana', 'Orange', 'Apple', 'Mango'];
// Banana * Orange * Apple * Mango
console.log(frutas12.join(' * '));
const coches = ['Saab', 'Volvo', 'BMW'];
// 4
console.log(coches.push('Renault'));
// ["Saab", "Volvo", "BMW", "Renault"]
console.log(coches);
// otra forma de agregar elementos
const coche2 = ['Saab', 'Volvo', 'BMW'];
coche2[coche2.length] = 'Renault';
// ["Saab", "Volvo", "BMW", "Renault"]
console.log(coche2);
// aunque no es una buena práctica añadir elementos por su posición
const frutas24 = ['Banana', 'Orange', 'Apple', 'Mango'];
frutas[10] = 'Lemon';
// ["Banana", "Orange", "Apple", "Mango", empty × 6, "Lemon"]
console.log(frutas24);
const frutas25 = ['Banana', 'Orange', 'Apple', 'Mango'];
// 5
console.log(frutas25.unshift('Lemon'));
// ["Lemon", "Banana", "Orange", "Apple", "Mango"]
console.log(frutas25);
const coches25 = ['Saab', 'Volvo', 'BMW'];
// BMW
console.log(coches25.pop());
// ["Saab", "Volvo"]
console.log(coches25);
const frutas30 = ['Banana', 'Orange', 'Apple', 'Mango'];
delete frutas30 [0];
// [empty, "Orange", "Apple", "Mango"]
console.log(frutas30);
// eliminar elementos
const frutas18 = ['Banana', 'Orange', 'Apple', 'Mango'];
// ["Orange", "Apple"]
console.log(frutas18.splice(1, 2));
// ["Banana", "Mango"]
console.log(frutas18);
// añadir elementos
const frutas2 = ['Banana', 'Orange', 'Apple', 'Mango'];
// []
console.log(frutas2.splice(2, 0, 'Lemon', 'Kiwi'));
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
console.log(frutas2);
// eliminar y añadir elementos (primero elimina y luego añade)
const frutas3 = ['Banana', 'Orange', 'Apple', 'Mango'];
// ["Apple", "Mango"]
console.log(frutas3.splice(2, 2, 'Lemon', 'Kiwi'));
// ["Banana", "Orange", "Lemon", "Kiwi"]
console.log(frutas3);
const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const myChildren = myGirls.concat(myBoys);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
console.log(myChildren);
const frutas101 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const frutas100 = frutas101.slice(1,2);
// ["Orange"]
const frutas88 = ['Banana', 'Orange', 'Apple', 'Mango'];
// ["Mango", "Apple", "Orange", "Banana"]
console.log(frutas88.reverse());
// 100
console.log(Math.max(40, 100, 1, 5, 25, 10));
// 1
console.log(Math.min(40, 100, 1, 5, 25, 10));
const frutas28 = ['Banana', 'Orange', 'Apple', 'Mango'];
// ["Apple", "Banana", "Mango", "Orange"]
console.log(frutas28.sort());
// ordenación ascendente de números enteros mediante una función de comparación
const puntos = [40, 100, 1, 5, 25, 10];
// función para ordenación ascendente
const puntos2 = puntos.sort((a, b) => a - b);
// [1, 5, 10, 25, 40, 100]
console.log(puntos2);
// esta forma de ordenar elementos es muy potente puesto que pueden ordenarse también objetos a partir de alguna propiedad
const coches35 = [
{ type: 'Volvo', year: 2016 },
{ type: 'Saab', year: 2001 },
{ type: 'BMW', year: 2010 }
];
// función para ordenar ascendentemente por la propiedad year
const cochesOrdenados = coches35.sort((a, b) => a.year - b.year);
// [{type: "Saab", year: 2001}, {type: "BMW", year: 2010}, {type: "Volvo", year:
2016
console.log(cochesOrdenados);
