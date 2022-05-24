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
        dirección: 'Sevilla'
        }
        };
      // Sevilla
console.log(persona1.datos.dirección);
// undefined
console.log(persona1.datos.otrodato);
console.log(persona1.datos);