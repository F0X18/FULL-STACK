//crear objetos

// declaración de un objeto con dos propiedades: un atributo y un método
const objeto = {
    name: 'Rebecca',
    diHola: () => {
    console.log('hola');
    }
    };
    objeto.diHola();


// declaración de un objeto vacío (posteriormente son agregados un atributo y un método)
const coche = {};
coche.contenido = 20;
coche.adelante = () => {
    console.log('Arrancando...');
    };
    coche.adelante();

//Tercera forma: con la partícula new sobre una función anónima (es obligatorio utilizar function en lugar de una función de flecha).
    const Persona = function(name) {
    this.name = name;
    };
    const yo = new Persona('alejandro');
    const tu = new Persona("alf")
    const beta= new Persona("beta")
    // alejandro
    console.log(yo.name);
    console.log(tu.name);
    console.log(beta)
// 4t forma

// Operaciones con las propiedades de un objeto
const persona = {
    nombre: 'Alejandro',
    'lugar de residencia': 'Madrid'
    };
    // Alejandro
    console.log(persona.nombre);
    // Alejandro
    console.log(persona['nombre']);
    // error
    console.log(persona['lugar de residencia']);
   // console.log(persona.lugar de residencia);
    // en este caso son obligatorios los corchetes
    persona['lugar de residencia'] = 'Sevilla';
    // Sevilla
    console.log(persona['lugar de residencia']);
    const propiedad = 'nombre';
    // undefined porque busca la variable propiedad dentro del objeto persona
    console.log(persona.propiedad);
    // Alejandro
    console.log(persona[propiedad]);

    const persona1 = {
        nombre: 'Carmen',
        apellidos: 'González',
        datos: {
            dirección: 'Sevilla',
            otrodato: 'freeze' ,
            masdatos: {
                info: 'moreno',
        }
        }
        };
      // Sevilla
console.log(persona1.datos.dirección);
// undefined
console.log(persona1.datos.otrodato);
console.log(persona1.datos.masdatos.info);
console.log(persona1.datos);

const coche1 = { marca: 'Ford', modelo: 'Focus' };
const coche2 = { marca: 'Ford', modelo: 'Focus' };
// devuelve false porque no comparten referencia
console.log(coche1 == coche2);
// devuelve false porque no comparten referencia
console.log(coche1 === coche2);
// devuelve true porque el valor es el mismo y son de tipo string
console.log(coche1.modelo === coche2.modelo);
const coche3 = coche1;
// devuelve true porque comparten referencia
console.log(coche1 === coche3);
//borrado de propiedades
const x = {
    peras: 3,fresas: 20
};
delete x.fresas;
console.log(x)

const x1 = {
    peras: 3,
    fresas: 20,
    // no se debe utilizar aquí la sintaxis de la función de flecha porque this en ese caso apuntaría al objeto global
    contar: function () {
    console.log(this.peras + this.fresas);
    }
    };
    // se guarda en un array el nombre de todas las propiedades del objeto x
    const nombresPropiedades = Object.keys(x1);
    // ["peras", "fresas", "contar"]
    console.log(nombresPropiedades);
    // true
    console.log(nombresPropiedades.includes('fresas'));

    const x2 = {
        peras: 3,
        fresas: 20,
        contar: function() {
        // no se puede utilizar aquí función de flecha porque this apuntaría al objeto global
        console.log(this.peras + this.fresas);
        }
        };
        // true
console.log('fresas' in x2);

// obligatorio utilizar function para posteriomente crear objetos con new
const Person = function(name) {
    // atributo público porque está declarado con this
    this.name = name || '';
    // atributo privado porque está declarado con const
    const lastname = 'González';
    // atributo privado porque está declarado con const
    const myName = this.name;
    // método privado porque está declarado con const
    const fullName = () => {
        return myName + ' ' + lastname;
        };
        // método público porque está declarado con this
        this.introduce = () => {
        return 'Hola, mi nombre es ' + fullName();
        };
        };
        const oscar = new Person('Óscar');
        // Óscar
        console.log(oscar.name);
        // Hola, mi nombre es Óscar González
        console.log(oscar.introduce());
        // undefined porque el atributo es privado
        console.log(oscar.lastname);
        // error porque el método no privado y no se puede acceder a él (es undefined) e invocar a undefined genera un error
        //console.log(oscar.fullName());
        console.log(oscar)
        const objeto10 = {
            nombre: 'Alejandro',
            // función clásica de JavaScript sin function (opción recomendada)
            mostrarNombre() {
            console.log(this.nombre);
            }
            }
            // Alejandro
            objeto10.mostrarNombre();
            const objeto200 = {
            nombre: 'Alejandro',
            // función clásica de JavaScript con function
            mostrarNombre: function() {
            console.log(this.nombre);
            }
            }
            
            const objeto100 = {
                nombre: 'Alejandro',
                // función clásica de JavaScript sin function (opción recomendada)
                mostrarNombre() {
                console.log(this.nombre);
                }
                }
                // Alejandro
                objeto10.mostrarNombre();
                const objeto20 = {
                nombre: 'Alejandro',
                // función clásica de JavaScript con function
                mostrarNombre: function() {
                console.log(this.nombre);
                }
                }   