/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

const miArreglo1 = [10, 20, 30, 40, 50];
const primerElemento = devolverPrimerElemento(miArreglo1);
console.log(primerElemento);


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length === 0) {
      return undefined;
   }
   return array[array.length - 1];
}

const miArreglo2 = [10, 20, 30, 40, 50];
const UltimoElemento = devolverUltimoElemento(miArreglo2);
console.log(UltimoElemento);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

const miArreglo = [10, 20, 30, 40, 50];
const largoDelArray = obtenerLargoDelArray(miArreglo);
console.log(largoDelArray);


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var newArray = [];

   for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] + 1); 
    }
    
    return newArray;  
  }
  var numeros = [1, 2, 3, 4, 5];
  var numerosIncrementados = incrementarPorUno(numeros);
  console.log(numerosIncrementados);



function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);  
  return array;  
}
var miArreglo3 = [1, 2, 3];
var nuevoElemento = 4;
var arregloActualizado = agregarItemAlFinalDelArray(miArreglo3, nuevoElemento);
console.log(arregloActualizado); 


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);  
  return array;  
}
var miArreglo4 = [2, 3, 4];
var nuevoElemento = 1;
var arregloActualizado = agregarItemAlComienzoDelArray(miArreglo4, nuevoElemento);
console.log(arregloActualizado); 


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   var frase = "";  
   
   for (var i = 0; i < palabras.length; i++) {
      frase += palabras[i];  
      if (i !== palabras.length - 1) {
         frase += " ";  
      }
   }
   
   return frase; 
}

var palabrasEjemplo = ['Hello', 'world!'];  
var fraseCompleta = dePalabrasAFrase(palabrasEjemplo);  
console.log(fraseCompleta);


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   
   return false; 
}

var miArreglo5 = [1, 2, 3, 4, 5];  
var elementoBuscado = 3;  
var resultado = arrayContiene(miArreglo5, elementoBuscado);  
console.log(resultado); 

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;  

   for (var i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i];  
   }

   return suma; 
}

var numeros = [1, 2, 3, 4, 5];  
var resultadoSuma = agregarNumeros(numeros);  
console.log(resultadoSuma);  


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;  

   for (var i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];  
   }

   var promedio = suma / resultadosTest.length; 

   return promedio; 
}

var resultados = [85, 90, 78, 92, 88]; 
var promedioFinal = promedioResultadosTest(resultados); 
console.log(promedioFinal);  

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let maxNumber = arrayOfNums[0];

   for (let i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > maxNumber) {
         maxNumber = arrayOfNums[i];
      }
   }

   
   return maxNumber;
}

const numbers = [5, 23, 8, 45, 12];
const maxResultado = numeroMasGrande(numbers);
console.log(maxResultado);


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   }

   if (arguments.length === 1) {
      return arguments[0];
   }

   let producto = 1;

   
   for (let i = 0; i < arguments.length; i++) {
      
      producto *= arguments[i];
   }


   return producto;
}

console.log(multiplicarArgumentos());      
console.log(multiplicarArgumentos(5));      
console.log(multiplicarArgumentos(2, 3));   
console.log(multiplicarArgumentos(4, 5, 6)); 







function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;

   for (let i = 0; i < array.length; i++) {
      
      if (array[i] > 18) {
         
         contador++;
      }
   }

   return contador;
}
const miArreglo6 = [10, 25, 30, 12, 20, 5, 40];
console.log(cuentoElementos(miArreglo6)); 


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
   
      return "Es fin de semana";
   } else {
   
      return "Es dia laboral";
   }
}
console.log(diaDeLaSemana(1)); 
console.log(diaDeLaSemana(3)); 
console.log(diaDeLaSemana(7)); 


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const numStr = num.toString();
   if (numStr.charAt(0) === '9') {
   
      return true;
   } else {
      
      return false;
   }
}
console.log(empiezaConNueve(987)); 
console.log(empiezaConNueve(235)); 
console.log(empiezaConNueve(90210)); 








function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0 || array.length === 1) {
      return true;
   }
   const primerElemento = array[0];
   for (let i = 1; i < array.length; i++) {
   
      if (array[i] !== primerElemento) {
         return false;
      }
   }


   return true;
}
console.log(todosIguales([5, 5, 5, 5])); 
console.log(todosIguales([2, 2, 3, 2])); 
console.log(todosIguales([])); 
console.log(todosIguales([8])); 


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesEncontrados = [];
   for (let i = 0; i < array.length; i++) {
      const mes = array[i];

      if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
         mesesEncontrados.push(mes);
      }
   }

   if (mesesEncontrados.length === 3) {
      return mesesEncontrados;
   } else {
      return "No se encontraron los meses pedidos";
   }
}
const mesesDesordenados = ["Enero", "Marzo", "Abril", "Mayo", "Noviembre"];
console.log(mesesDelAño(mesesDesordenados)); 


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const resultados = [];
   for (let i = 0; i <= 10; i++) {
   
      const resultado = 6 * i;

      resultados.push(resultado);
   }
   return resultados;
}
const tabla6 = tablaDelSeis();
console.log(tabla6); 


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const mayoresACien = array.filter(function(valor) {
      return valor > 100; 
   });

   return mayoresACien;
}
const arregloOriginal = [50, 120, 80, 150, 200, 90, 110];
const resultadoFiltrado = mayorACien(arregloOriginal);
console.log(resultadoFiltrado); 


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const nuevosValores = [];
   let iteraciones = 0;
   while (iteraciones < 10) {

      num += 2;


      nuevosValores.push(num);
      iteraciones++;
      if (num === iteraciones) {

         return "Se interrumpió la ejecución";
      }
   }
   return nuevosValores;
}
console.log(breakStatement(3));
console.log(breakStatement(8)); 


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const nuevosValores = [];
   for (let i = 0; i < 10; i++) {
   
      if (i === 5) {
         continue;
      }

      num += 2;
      nuevosValores.push(num);
   }

   return nuevosValores;
}
console.log(continueStatement(3));








/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
  module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
