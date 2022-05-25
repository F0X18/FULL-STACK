function sumar(a, b) {
    console.log(a + b);
    }
    // 5
    sumar(2, 3);
    // NaN (undefined + undefined)
    sumar();
    // 3
    sumar(1, 2);
    // 3
    sumar(1, 2, 3, 4);
    // 12
    sumar('1', 2);
    // 12
    sumar(1, '2');


    function sumar1(a,b,c,d) {
        console.log(a+b+c+d)        
    }
    sumar1(1,2,3,4)
    sumar1(1,2,3,)
    const sumare = function(a, b) {
        console.log(a + b);
        };
// 5
    sumare(2, 3)
    const a = {
    f: function() {
        console.log('Hola');
        }
        };
// invocación utilizando la notación punto
        a.f();
// invocación utilizando la notación con corchetes
        a['f']();

        (function saludar() {
            console.log('Hola caracola');
            })();
            // error
           // saludar();
 
 
function hacerAlgo(a, b) {
    this.a = a;  this.b = b;

}
// creación del objeto
const b = new hacerAlgo(1,2);
// error porque b es un objeto
//b();
// 1
console.log(b.a);
// 2
console.log(b.b);
// undefined
console.log(this.a);
// función normal
function funcion(altura) {
    return 5 * altura / 2;
    };
    // función de flecha
    const funcion1 = (altura) => {
    return 5 * altura / 2;
    };
    // forma simplificada de la función de flecha
    const funcion2 = altura => 5 * altura / 2;      