/* ejercicio 1 : escribe un programa que liste el nombre de las propiedades del siguiente
objeto utilizando las dos formas comentadas con anterioridad: { name : "David Rayy",
sclass : "VI", rollno : 12 } */
const David= { 
    name : "David Rayy",
    sclass : "VI", 
    rollno : 12 }

    console.log(David)
let f = { 
    name : "David Rayy",
    sclass : "VI", 
    rollno : 12 }
    
    console.log(f);



//ejercicio 2 escribe un programa que declare el siguiente objeto: { x: 1, y: 2 }. A continuación, elimina la propiedad x y añade una propiedad nueva z con valor 5.
let x1 = (1)
let y1= (2)
delete x1
console.log(x1)
let z=(5)
console.log(z)
//ejercicio 3 escribe un programa que declare dos objetos: { x: 1, y: 2, z: 3 } y { a: 1, y: 2, z: 1 }. A continuación, comprueba qué nombres de propiedades son coincidentes y cuáles son también coincidentes en valor

let x=1;y=2;z=3
let a=1;y1=2;z1=1

console.log(x == a);
console.log(x===a)
console.log(y == y1);
console.log(y===y1)
console.log(z == z1);
console.log(z===z1)
