/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
  
    // Método "detalle" que devuelve un objeto con las propiedades de la persona y sus valores.
    detalle() {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio
      };
    }
  }
  // Crear una instancia de Persona
  const persona1 = new Persona("Juan", "Pérez", 30, "Calle 123");
  
  // Obtener los detalles de la persona utilizando el método detalle
  const detallesPersona1 = persona1.detalle();
  console.log(detallesPersona1);
  
    
    
   function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
      // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
      // Recibirás las propiedades por parámetro.
      // Retornar la instancia creada.
      // Tu código:
      const nuevaPersona = new Persona(nombre, apellido, edad, domicilio);
      return nuevaPersona;
    }
       // Llamamos a la función para crear una instancia de Persona
const persona2 = crearInstanciaPersona("Ana", "García", 25, "Avenida 456");
console.log(persona2.detalle()); // Imprimirá los detalles de la persona

const persona3 = crearInstanciaPersona("Carlos", "Martínez", 35, "Calle 789");
console.log(persona3.detalle()); // Imprimirá los detalles de la persona


   function agregarMetodo() {
      // La función agrega un método "datos" a la clase "Persona".
      // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
      // Ejemplo: "Juan, 22 años".
      // Tu código:
      Persona.prototype.datos = function() {
        return `${this.nombre}, ${this.edad} años`;
      };
    }
agregarMetodo();

const persona = new Persona("María", "López", 28, "Calle 234");

console.log(persona.datos()); 
  

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
