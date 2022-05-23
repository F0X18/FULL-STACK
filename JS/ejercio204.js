// ejercicio 1 comparar los 2 primeros caracteres
const text = 'hola'
const text1 = 'hello'

// muestro primera posicion
console.log(text.charAt(0));
console.log(text1.charAt(0));
//comparativa
console.log(text.charAt(0) == text.charAt(0))


// ejercicio 2 comparar los 2 primeros y los 2 ultimos caracteres.

const text2 = 'hola'
const text3 = 'hello'
//muestro primera posicion
console.log(text2.charAt(0));
console.log(text3.charAt(0));

//muestro la ultima posicion
console.log(text2.length-1);
console.log(text3.length-1);
console.log(text2.charAt(3));
console.log(text3.charAt(4));


//primera letra comparativa
console.log(text2.charAt(0) == text3.charAt(0));


//ultima letra comparativa
console.log(text2.charAt(3) == text3.charAt(4));
console.log(text2.charAt(text2.length-1) == text3.charAt(text3.length-1));

//ejercicio 3 Escribe un programa que compruebe que el substring "abc" existe en un string dado, pero no puede encontrarse ni al comienzo, ni al final.

let texto4= 'lorem gimsup abc humanus';
let existeabc=texto4.indexOf('abc'); 
/*if (existeabc.indexOf(abc)); (existeabc.lastIndexOf(abc)); {
    console.log('si existe ABC dentro del string');
} else {
    console.log('no existe ABC dentro del string');
} */
    // se puede hacer con slice 1-(length-2)
console.log(texto4.substr(2));

//ejercicio 4
const texto5 = 'hola chanchito'
const posicion= "6"
if (texto5.charAt(6) == texto5.charAt(7)) {
    console.log('la letra siguente no es igual');
} else if(texto5.charAt(6) == texto5.charAt(5)) {
    console.log('la letra anterior no es igual');
} else {
    console.log('no se cumple ninguna')
} 
console.log(texto5.charAt(5) == texto5.charAt(7))
console.log(texto5.charAt(6) == texto5.charAt(7))
console.log(texto5.charAt(6) == texto5.charAt(5))

//ejercicio 5 escribe un programa que muestre por pantalla la posición de la segunda y tercera ocurrencia del carácter 'a' en un string dado.

//ejercicio 6 escribe un programa que devuelva si un string es palíndromo (se escribe igual hacia delante y hacia detrás). Ejemplo: "sometemos".

//ejercicio 7  escribe un programa que elimine el último carácter de un string.

const cortar='la casa de marco'

console.log(cortar.slice(0,-1));
//ejercicio 8 escribe un programa que inserte el carácter 'b' cada tres posiciones en un string.

//ejercicio 9 escribe un programa que convierta en mayúsculas la primera letra de cada palabra de un string.

