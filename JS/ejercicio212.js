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

let elementos1=["montaña","fosa","mar","rio","cielo"]
let elementos2=["oceano","rio","fosa","prado","mar"]
let contador1= [0]
let repeticiones=[]
for (const elementos1 of elementos2 )
 {
    if (elementos1==elementos2)(contador=+1) } {
        console.log(contador1)
        console.log(elementos1)
        console.log(elementos2)
        console.log("hay " +contador1+ " elementos iguales")
    }


