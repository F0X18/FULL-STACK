//ejercicio 1
let a = 4;
let b = 2;
() => a + b ;

let c = 4;
let d = 2;
() => c - d  ;

let e = 4;
let f= 2;
() => e * f;

let g = 4;
let h = 2;
() => g / h;



/*
const sumar = (a) => {
    return 5 * altura / 2;
};
const restar = (b) => {
return 5 * altura / 2;
};
const multiplicacion = (c) => {
return 5 * altura / 2;
};
const division = (d) => {
return 5 * altura / 2;
};
  


const funcion1 = altura => 5 * altura / 2;
const funcion2 = altura => 5 * altura / 2;
const funcion3 = altura => 5 * altura / 2;
const funcion4 = altura => 5 * altura / 2;
*/
//Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.
const sumar =(x,y) => x+y; 
const restar =(x,y) => x-y;
const multiplicar =(x,y) =>x*y;
const dividir =(x,y) => x/y;
console.log(sumar(4,2));
console.log(restar(3,1));
console.log(multiplicar(7,5));
console.log(dividir(12,6));

/*ejercicio 3 adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea 
invocado dentro de la función con el resultado de la operación. Posteriormente
ivocar a las cuatro funciones creando una función de callback por separado y pasándola
después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas
de desarrollador --> Source) para comprobar cómo se ejecuta el programa.
*/

const sumar1 =(x,y,callback) => x+y; 
const restar1 =(x,y,callback) => x-y;
const multiplicar1 =(x,y,callback) =>x*y;
const dividir1 =(x,y,callback) => x/y; 

const callback = (resultado) => {
    console.log(resultado);
    }
console.log(sumar1(1,2, callback))
console.log(restar1(1,2, callback))
console.log(multiplicar1(5,2, callback))
console.log(dividir1(10,2, callback))
