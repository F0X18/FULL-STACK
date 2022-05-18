const str3 = 'hola';
// 'lo'
console.log(str3.substring(1, 3));
// 'ola'
console.log(str3.substring(1));
const str4 = 'hola';
// h
console.log(str4.charAt(0));
// a
console.log(str4.charAt(3));
//
console.log(str4.charAt(4));
// h
console.log(str4[0]);
// a
console.log(str4[3]);
// undefined
console.log(str4[4]);
//ARRAY
const array1 = [];
const array2 = [20, 3, 8];
const array3 = ['Carmen', 'Juan'];
// otra forma de declarar arrays
const array4 = new Array(20, 3, 8);
const array5 = new Array(null, undefined, '', 8);
const array7 = new Array('Carmen', 'Juan');
// Carmen
console.log(array7[0]);
// undefined
console.log(array7[2]);
const array9 = new Array('Carmen', 'Juan');
array9[3] = 'Alejandro';
// [ 'Carmen', 'Juan', <1 empty item>, 'Alejandro' ]
console.log(array9);
const array10 = new Array('Carmen', 'Juan');
array10.length = 1;
// [ 'Carmen' ]
console.log(array10);
const date1 = new Date();
// Sun Apr 22 2018 12:37:06 GMT+0200 (Hora de verano romance)
console.log(date1);
// milisegundos en formato Unix
const milisegundos = new Date().getTime();
// fecha creada a partir del número de milisegundos en formato Unix
const date2 = new Date(milisegundos);
const semana= new Array('lunes','martes','miercoles','jueves','viernes','sabado','domingo')
console.log(semana[2])
//conversion de tipos
// 2
const a = parseInt('2');
// 2
const b = +'2';
// NaN
const c = +'d';
// 2
const d = Number('2');
// 2.32
