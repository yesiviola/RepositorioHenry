/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {};

   gato.nombre = nombre;
   gato.edad = edad;

   gato.meow = function() {
      return "Meow!";
   };

   return gato;
}

var miGato = crearGato("Pelusa", 3);

console.log(miGato.nombre); 
console.log(miGato.edad);   
console.log(miGato.meow());

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {};

   usuario.nombre = nombre;
   usuario.email = email;
   usuario.password = password;

   return usuario;
}
var usuario1 = nuevoUsuario("Juan", "juan@example.com", "contraseña123");

console.log(usuario1.nombre);    
console.log(usuario1.email);    
console.log(usuario1.password);   

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;

   return objeto;
}

var miObjeto = {};
console.log(miObjeto); 

agregarPropiedad(miObjeto, "nuevaPropiedad");

console.log(miObjeto); 
console.log(miObjeto.nuevaPropiedad);

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]();
}
const miObjeto1 = {
   saludar: function() {
      console.log('¡Hola desde el método!');
   }
};

invocarMetodo(miObjeto1, 'saludar');

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   const resultado = objetoMisterioso.numeroMisterioso * 5;
   
   return resultado;
}
const miObjetoMisterioso = {
   numeroMisterioso: 10
};

const resultadoMultiplicacion = multiplicarNumeroDesconocidoPorCinco(miObjetoMisterioso);
console.log(resultadoMultiplicacion); 

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   
   return objeto;
}
const miObjeto3 = {
   nombre: 'Ejemplo',
   edad: 25,
   ciudad: 'Ciudad Ejemplo'
};

const propiedadEliminada = 'edad';
const objetoSinPropiedad = eliminarPropiedad(miObjeto3, propiedadEliminada);
console.log(objetoSinPropiedad);

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.email !== null && objetoUsuario.email !== undefined;
}
const usuario2 = {
   nombre: 'Juan',
   email: 'juan@example.com'
};

const usuario3 = {
   nombre: 'María',
   email: null
};

console.log(tieneEmail(usuario2));
console.log(tieneEmail(usuario3)); 

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return propiedad in objeto;
}

const miObjeto2 = {
   nombre: 'Claudia',
   edad: 25,
   ciudad: 'Barcelona'
};

console.log(tienePropiedad(miObjeto2, 'edad')); 
console.log(tienePropiedad(miObjeto3, 'genero'));

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return objetoUsuario.password === password;
}
const usuario = {
   username: 'usuarioEjemplo',
   password: 'contraseña123'
};

console.log(verificarPassword(usuario, 'contraseña123')); 
console.log(verificarPassword(usuario, 'contraseña456')); 

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}
const usuarioEjemplo = {
   username: 'usuarioEjemplo',
   password: 'contraseña123'
};

const nuevaContrasena = 'nuevaContraseña456';
const usuarioConNuevaContrasena = actualizarPassword(usuarioEjemplo,nuevaContrasena);
console.log(usuarioConNuevaContrasena);

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}
const usuarioEjemplos = {
   username: 'usuarioEjemplo',
   password: 'contraseña123',
   amigos: ['Luis', 'Maria']
};

const nuevoAmigo = 'Josias';
const usuarioConNuevoAmigo = agregarAmigo(usuarioEjemplos, nuevoAmigo);
console.log(usuarioConNuevoAmigo);

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;
}
const usuariosArray = [
   { nombre: 'Usuario1', esPremium: false },
   { nombre: 'Usuario2', esPremium: false },
   { nombre: 'Usuario3', esPremium: false }
];

const usuariosPremiumArray = pasarUsuarioAPremium(usuariosArray);
console.log(usuariosPremiumArray);

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let totalLikes = 0;

   if (objetoUsuario.posts && Array.isArray(objetoUsuario.posts)) {
     for (const post of objetoUsuario.posts) {
       if (post.likes && typeof post.likes === 'number') {
         totalLikes += post.likes;
       }
     }
   }
 
   return totalLikes;
 }
 const usuarioPosts = {
   posts: [
     { likes: 10 },
     { likes: 20 },
     { likes: 15 }
   ]
 };
 
 const totalLikes = sumarLikesDeUsuario(usuarioPosts);
 console.log('Total de likes:', totalLikes); 
 

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function() {
      const descuento = this.precio * this.porcentajeDeDescuento;
      const precioFinal = this.precio - descuento;
      return precioFinal;
    };
    return objetoProducto;
  }
  const producto = {
    precio: 10,
    porcentajeDeDescuento: 0.2
  };
  
  agregarMetodoCalculoDescuento(producto);
  
  const precioFinal = producto.calcularPrecioDescuento();
  console.log('Precio final con descuento:', precioFinal); // Debería mostrar "Precio final con descuento: 8"
  
    

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
