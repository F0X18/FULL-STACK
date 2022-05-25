/*Ejercicio 1 del proyecto: escribe un programa que declare 3 objetos de cada modelo de
datos considerado: gestor, cliente, mensaje y transferencia. Los valores de las
propiedades de los objetos pueden ser arbitrarios. */

const objeto1={
    gestor : "Mario" ,
    cliente: "marco" ,
    mensaje: "pedido",
    tranferia:"correcta",
}
const objeto2={
    gestor: "Mario" ,
    cliente: "Evee" ,
    mensaje: "perdido",
    tranferia:"pendiente",
}

const objeto3={
    gestor: "Mario" ,
    cliente: "sinclair" ,
    mensaje: "sinEnviar",
    tranferia:"noRealizada",
}
 

//ejercicio 2 

//objeto
arrayObj1=Object.keys(objeto1)
console.log(arrayObj1);
arrayObj2=Object.keys(objeto2)
console.log(arrayObj2);
arrayObj3=Object.keys(objeto3)
console.log(arrayObj3);
lon1 =arrayObj1.length;//4
for (let i = 0; i < lon1; i++) {
    console.log(objeto1[arrayObj1[i]]);
}
lon2 =arrayObj2.length;//4
for (let i = 0; i < lon2; i++) {
    console.log(objeto2[arrayObj2[i]]);
}
lon3 =arrayObj3.length;//4
for (let i = 0; i < lon3; i++) {
    console.log(objeto3[arrayObj3[i]]);
     }
     
     
     Object.getOwnPropertyNames(objeto1).forEach(function(val, idx, array) {
        print(val + " -> " + obj[val]);
      });
