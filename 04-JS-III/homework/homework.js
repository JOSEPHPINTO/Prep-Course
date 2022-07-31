// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0] 
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
   
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  /*
  for(let i = 0 ; i == array.lenght -1 ; i++){
     array[i] == array[i]+ 1;
    
  }*/
  var array = array.map(elem => elem + 1);
   return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
 return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
   return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras.reduce((acc, el) => acc + el + " ", "");
  return frase.substr(0, frase.length - 1);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
  
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const resultado = numeros.reduce((acc, el) => acc + el , 0);
  return resultado;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  const resultado = resultadosTest.reduce((acc, el) => acc + el , 0);
  return resultado / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0]
  for(let i = 0 ;  i < numeros.length ; i++){
    if(max < numeros[i]){
      max = numeros[i];
    }
  }
  //let max = Math.max(...numeros);
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length > 0){
    var resultado = 1;
    for(let i = 0 ; i < arguments.length  ; i++){
    
      resultado *= arguments[i]
      console.log(i, resultado); 
    } 
    return resultado;
  }
  return 0;
/* 
 var args = Array.prototype.slice.call(arguments);
 if(args.length > 0){
 var resultado = args.reduce((acc , el) => acc * el, 1)
  return = resultado;
}
  return 0;
 */

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var total = 0;
 for(let i = 0; i < arreglo.length ; i++){
    if (arreglo[i] > 18){
      total += 1;
      // console.log(total)
    }
   console.log(i)
  }
 return total;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
 switch(numeroDeDia){
 
  case  1: 
  case 7:
    return "Es fin de semana";
    break;
  default:  
    return "Es dia Laboral"
 }
 /*
 if( numeroDeDia == 1 || numeroDeDia == 7){
  return "Es fin de semana" ;
 }
 return "Es dia Laboral";
  */
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var x = String(n)
  console.log(x);
  if(x[0] == 9){
    return true;
  }
  
  return false
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  return arreglo.every(elem => arreglo[0] == elem);
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  if (array.find(elem => elem == "Enero") && array.find(elem => elem == "Marzo") && array.find(elem => elem == "Noviembre") ){
    var meses = ["Marzo", "Noviembre", "Enero"];
    return meses;
  }
  
  return"No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const mayor = array.filter(elem => elem > 100);

  return mayor;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [numero + 2];
  for(let i = 0 ; i < 9 ; i++){
    array.push( parseInt(array[i]) + 2);
    if (i == array[i]){
      return "Se interrumpió la ejecución";
      break
    }
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [numero + 2];
  for(let i = 0 ; i < 9 ; i++){
    
    if (i === 5){
      continue;
    }
    console.log(i);
    if(i <= 5){
    array.push( parseInt(array[i]) + 2);
    }
    if(i > 5){
      array.push( parseInt(array[i -1 ]) + 2);
      }
    
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
