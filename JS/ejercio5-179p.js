const sumar2 =(x,y,callback) => callback(x+y); 
const restar2 =(x,y,callback) => callback(x-y);
const multiplicar2 =(x,y,callback) =>callback(x*y);
const dividir2 =(x,y,callback) => callback(x/y);



sumar2(4,2,(resultado) => {
    setTimeout(() => {
        console.log('Esta instrucción se ejecuta después de 1 segundos. La suma es :'+  resultado);
        }, 1000);
});
restar2(3,1,(resultado) => {
    setTimeout(() => {
        console.log('Esta instrucción se ejecuta después de 2 segundos. la resta es:'+ resultado);
        }, 2000);
});
multiplicar2(5,7,(resultado) => {
    setTimeout(() => {
        console.log('Esta instrucción se ejecuta después de 3 segundos. la multiplicacion es:'+ resultado);
        }, 3000);
});
dividir2(6,8,(resultado) => {
    setTimeout(() => {
        console.log('Esta instrucción se ejecuta después de 4 segundos. La division es:'+ resultado);
        }, 4000);
});