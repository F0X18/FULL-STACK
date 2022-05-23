// crea un objeto String
const a = new String('hola');
// crea una string con comillas dobles
const b = 'hola';
// crea una string con comillas simples
const c = 'hola';
// más rápido
const x = 'John';
// más lento
const y = new String('John');
// string
console.log(typeof(x));
// object
console.log(typeof(y));
// true porque se comparan los valores (son iguales) y no los tipos (no son iguales)
console.log(x == y);
// false
console.log(x === y);
const z = new String('John');
// false porque es una comparación entre objeto y objeto (referencia)
console.log(y == z);
// false
console.log(y === z);
// "hola"
const alfa = '\"hola\"';
document.write(alfa + "<br>")
// 'hola"
const beta = '\'hola\'';
document.write(beta + "<br>")
// \hola\
const cat = '\\hola\\';
document.write(cat + "<br>")
const str = 'En un lugar de la mancha';
// 24
console.log(str.length);
const str1 = 'En un lugar de la mancha';
// 6
console.log(str1.indexOf('l'));
// 6 (comienza a buscar a partir de la posición 6)
console.log(str1.indexOf('l', 6));
// 18
console.log(str1.indexOf('mancha'));
// -1 (comienza a buscar a partir de la posición 19)
console.log(str1.indexOf('mancha', 19));
// -1
console.log(str1.indexOf('noencontrado'));
const str2 = 'En un lugar de la mancha';
// 23
console.log(str2.lastIndexOf('a'));
// 6 (considera solamente hasta la posición 6)
console.log(str2.lastIndexOf('l', 6));
// -1 (considera solamente hasta la posición 5)
console.log(str2.lastIndexOf('l', 5));
// -1
console.log(str2.lastIndexOf('noencontrado'));
const str3 = 'En un lugar de la mancha';
// 9 (expresión regular que busca la primera coincidencia de a, b o c)
console.log(str3.search(/[abc]/));
const str4 = 'Apple, Banana, Kiwi';
// Banana (la posición 13 no se toma)
console.log(str4.slice(7, 13));
// Banana (la posición -6 no se toma)
console.log(str4.slice(-12, -6));
// Banana, Kiwi (toma desde la posición 7 hasta el final del string)
console.log(str4.slice(7));
// Banana, Kiwi (toma desde la posición -12 hasta el final del string)
console.log(str.slice(-12));