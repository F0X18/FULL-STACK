// ejercicio 1
//for 
function contador(num) {
     for (let i = 0; i < 6; i++) {
      console.log(i)
         
     }
     
 }
 //array for
const miArray=[0,1,2,3,4,5];
miArray.forEach(function(item, index)   {
    console.log("el valor de la posicion" +index+ " es: " +item)
})

//array for of
let numeros=[0,1,2,3,4,5]; 
for (const numero of numeros) {
    console.log(numero)
    
}

 //ejercicio 2



 let colores = ["azul","rojo","verde"]
 for (let color of colores) {
     console.log(color)
     
 }

 //ejercicio 3
let colores3=[]
for (let color of colores3) {
    colores3.push(color)
}
//ejercicio 4

let elementos1=["montaña", "casa", "fosa", "playa", "rio"];
let elementos2=["oceano", "rio", "playa", "prado", "mar"];
let contador1=0;
let repeticiones=[];
for (let element1 of elementos1 ){
    for (let element2 of elementos2)
    if (element1==element2) {
        contador1++; //contador = contador +1
            repeticiones.push(element1);
       
    }
}
console.log(`El número de repetidos es ${contador1}`);
console.log("Hay " + contador1 + " elementos iguales entre los dos array. Estos son: " +  repeticiones);