// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = Object.entries(objeto)
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {}
 for(let i = 0 ; i < string.length ; i++){
  let letter = string[i]
  if(objeto[letter] == undefined){
    objeto[letter] = 1;
  }else{
    objeto[letter]++;
  }
 }
 return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array = [...s];
  var firstarray = [];
  var secondarray = [];
  for(let i = 0 ; i < s.length ; i++){
    var letter = array[i];
    if(letter == letter.toUpperCase()){
      firstarray.push(letter)
    }else{
      secondarray.push(letter)
      
    }
  }
  var firstString = firstarray.join("");
  var secondString = secondarray.join("");
  var thirdString = firstString + secondString;
  return thirdString
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(" ");
  var reverseArray = []
  for(let i = 0 ; i < array.length ; i++){
    var array1 = array[i].split("");
    var array2 = array1.reverse();
    var array3 = array2.join("");

    reverseArray.push(array3);
  }
  var reverseString = reverseArray.join(" ");
  return reverseString;


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = String(numero);
  var array1 = Array.from(string);
  var array2 = array1.reverse();
  var reverseString = array2.join("")
  if(string === reverseString){
    var si = "Es capicua";
  }else {
    var si = "No es capicua";
  }
  si;
  
  return si;

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = Array.from(cadena);
  var newArray = [];
  for(let i = 0 ; i < array.length; i++){
    if (array[i] != "a" && array[i] != "b" && array[i] != "c"){
      newArray.push(array[i]);
    }
  }
  var newString = newArray.join("")
  return newString;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(let i = 0; i < arr.length; ++i) {

    for(let j = i + 1; j < arr.length; ++j) {
        
        if(arr[i].length > arr[j].length) {
            let auxiliar = arr[i];
            arr[i] = arr[j];
            arr[j] = auxiliar;
        }3
    }
    
  }

  return arr;
  

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newArray = []
  for(let i = 0 ; i < arreglo1.length; i++){
    arreglo1[i]
    for(let j = 0 ; j < arreglo2.length ; j++){
      if(arreglo1[i] == arreglo2[j]){
        newArray.push(arreglo1[i])
      }
      
    }
  }
  return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

