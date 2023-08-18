/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const resultado = [];

   for (const clave in objeto) {
       if (objeto.hasOwnProperty(clave)) {
           resultado.push([clave, objeto[clave]]);
       }
   }

   return resultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const resultado = {};
   for (let i = 0; i < string.length; i++) {
      const letra = string[i];
      if (resultado.hasOwnProperty(letra)) {
          resultado[letra] += 1;
      } else {
          resultado[letra] = 1;
      }
  }

  return resultado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let uppercase = '';
   let lowercase = '';

   for (let i = 0; i < string.length; i++) {
       if (string[i] === string[i].toUpperCase()) {
           uppercase += string[i];
       } else {
           lowercase += string[i];
       }
   }

   return uppercase + lowercase;
}


function reverseWord(word) {
   return word.split('').reverse().join('');
 }

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const palabras = frase.split(' ');
      const palabrasInvertidas = [];
      for (let i = 0; i < palabras.length; i++) {
        
        const palabraInvertida = reverseWord(palabras[i]);
        
        palabrasInvertidas.push(palabraInvertida);
      }
    
      const resultado = palabrasInvertidas.join(' ');
    
      return resultado;
    }
    
    const fraseOriginal = "The Henry Challenge is close!";
    const resultadoInvertido = asAmirror(fraseOriginal);
    console.log(resultadoInvertido);  // Output: "ehT yrneH egnellahC si !esolc"
    

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   const numeroStr = numero.toString();

   let numeroInvertido = "";
 
   for (let i = numeroStr.length - 1; i >= 0; i--) {
     numeroInvertido += numeroStr[i];
   }
 
   if (numeroStr === numeroInvertido) {
     return "Es capicua";
   } else {
     return "No es capicua";
   }
 }
 console.log(capicua(12321)); 
 console.log(capicua(12345)); 
 
function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const resultado = string.replace(/[abc]/gi, '');

   return resultado;
 }
 const inputString = "abcdeABCDE";
 const stringSinAbc = deleteAbc(inputString);
 console.log(stringSinAbc); 

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   const resultado = arrayOfStrings.sort((a, b) => a.length - b.length);

   return resultado;
 }
 
 const inputArray1 = ["You", "are", "beautiful", "looking"];
 const sortedArray2 = sortArray(inputArray1);
 console.log(sortedArray2); 

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const interseccion = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      interseccion.push(array1[i]);
    }
  }

  return interseccion;
}
const arreglo1 = [4, 2, 3];
const arreglo2 = [1, 3, 4];
const resultadoInterseccion = buscoInterseccion(arreglo1, arreglo2);
console.log(resultadoInterseccion);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
