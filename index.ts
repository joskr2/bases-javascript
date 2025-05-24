import { ArrayBufferSink } from "bun";
import { convertToObject, JsxEmit } from "typescript";

//JS
let nombre = "Juan";

//TS
let nombre2: string = "Martha";

//JS
let anhoNacimiento = 1600;

// TS
let anhoNacimiento2: number = 1700;

//JS
let esProgramadora = true;

//TS
let esProgramadora2: boolean = false;

//TS
// aca tengo dos tipos y le estoy diciendo que el valor que puede contener es texto o nulo
let miProyecto: string | null = "Motor de busqueda";

// la manera tradicional de imprimir valores en js/ts + + + => concatenacion de valores
// concatenar = unir
let multipleValores = "Hola" + nombre2 + "nacio en el año " + anhoNacimiento2;

// la interpolacion de strings(cadenas de texto)
// interpolar = incluir
let mostrarValores = `Hola ${nombre}, nacio en el año ${anhoNacimiento}`;

console.log(multipleValores);

// "" comilla doble
// '' comilla simple
// `` comilla invertida

//JS
function saludar(persona, saludo) {
  return `Hola ${persona}, este es mi saludo ${saludo}`;
}

//TS
function saludar2(persona: string, saludo: string): string {
  return `Hola ${persona}, este es mi saludo ${saludo}`;
}

//esta es una constante
const CONSTANTE = 3;

//esta es una funcion flecha
const saludar3 = (persona1, saludo1) => {
  return `Hola ${persona1}, este es mi saludo ${saludo1}`;
};

const saludar4 = (persona: string, saludo: string): string => {
  return `Hola ${persona}, este es mi saludo ${saludo}`;
};

const saludar5 = (persona: string, saludo: string): string =>
  `Hola ${persona}, este es mi saludo ${saludo}`;

// console.log(persona,saludo)

//console.log(persona1,saludo1)

// condicionales
//if (CONDICION) {//ESTO SE ESJECUTA SI SE CUMPLE LA CONDICION COMO VERDADERA} else {// SE EJECUTA SI LA CONDICION ES FALSA}

// si....si no...
// if... else

let mayorDeEdad = 18;

// disclaimer , el = , unico , es para asiganr valores
// ej let valor = 1

// 1. La primera forma de comparar valores es usando el operador, de Doble =,  == , esto compara solamente el valor
// ej. 1 =='1', esto es true (NO DEBERIA SERLO, pero asi funciona JS)

// 2. La segunda manera de comparar valores es usando el operador Triple =, === , esto compara de manera estricta los valores y los tipos
// ej2, 1 === '1' -> false, aca comparo el numero 1 , con el '1' cadena de texto

// 3. La tercera manera es con los operadores de > (mayor), < (menor), y basicamente compara de manera exclusiva
// ej. mayor de edad es > de 18 ahnos, esto deja fuera al 18
// ej. mayor de edad es >= de 18 ahnos, aqui si empieza desde el 18, lo incluye

// SI, mayorDeEdad es MAYOR IGUAL a 18 ,imprime "Eres mayor de edad", sino imprime "No eres mayor de edad"
if (mayorDeEdad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("No eres mayor de edad");
}

// ES OTRA MANERA DE ESCRIBIR EL IF-ELSE
// CONDICION ? VALOR SI ES POSITIVO : VALOR SI ES NEGATIVO
// mayorDeEdad >= 18
//   ? console.log("Eres mayor de edad")
//   : console.log("No eres mayor de edad");

// CONJUNCION
// && -> y logico  -> si ambos lados de la condicion son verdaderos , entonces todo es verdadero
//  p  es verdadero
// q es verdadeo
// es y logico me dice que si ambos son verdader entonces la sentencia es verdadera

// en nuestra primera condicion : si mascoras es mayor a 1 Y mascotas es menor a 3, es decir , si ambas proposiciones son verdaderas entonces esa condicion se evaluara a verdader, entonces, se ejecuta , lo que esta dentro del if
// si cualquiera de los dos lados de la expresion logica es falso, entonces todo es falso

// p: true
// q: true

// p ^ q -> true

// && -> y logico  -> si ambos lados de la condicion son verdaderos , entonces todo es verdadero
//  p  es verdadero
// q es verdadeo
// es y logico me dice que si ambos son verdader entonces la sentencia es verdadera

// en nuestra primera condicion : si mascoras es mayor a 1 Y mascotas es menor a 3, es decir , si ambas proposiciones son verdaderas entonces esa condicion se evaluara a verdader, entonces, se ejecuta , lo que esta dentro del if
// si cualquiera de los dos lados de la expresion logica es falso, entonces todo es falso

// p: true
// q: true

// p ^ q = true

// --------------------------------------------------------------------

//Disyuncion
// || -> O logico  -> si alguno de los lados de la condicion es falso , entonces todo es falso
// p  es falso
// q es verdadeo

// en nuestra tercera condicion : si mascotas es igual a 5 Y mascotas es igual a 6, es decir , si alguna de las  proposiciones es falsa  entonces esa condicion se evaluara a falsa, entonces, se ejecuta , lo que esta dentro del tercer else if
// si cualquiera de los dos lados de la expresion logica es falso, entonces todo es falso

// p: false
// q: true

// p v q -> false

// || -> y logico  -> si ambos lados de la condicion son verdaderos , entonces todo es verdadero
//  p  es verdadero
// q es verdadeo
// es y logico me dice que si ambos son verdader entonces la sentencia es verdadera

// en nuestra primera condicion : si mascoras es mayor a 1 Y mascotas es menor a 3, es decir , si ambas proposiciones son verdaderas entonces esa condicion se evaluara a verdader, entonces, se ejecuta , lo que esta dentro del if
// si cualquiera de los dos lados de la expresion logica es falso, entonces todo es falso

// p: true
// q: true

// p ^ q = true

// NEGACION
// para negar un valor solamente se pone !

// si p es true y quiero que sea false , entonces escribire algo asi !p

let fruta = "pera";
// string -> es un array de caracteres(letras)
let fruta2: Array<string> = ["p", "e", "r", "a"];

if (fruta.length === fruta2.length) {
  console.log("ambos tienen 4 caracteres");
}

if (fruta === "manzana") {
  console.log("Es una manzana!!");
  // length es un metodo que tienen los array de elementos y los strings(arrays de caracteres)
} else if (fruta === "melon" && fruta.length === 5) {
  console.log(
    "efectivamente es un melon y su nombre tiene 5 caracteres(length)"
  );
} else if (fruta === "naranja" || fruta.length >= 4) {
  console.log("No se si tengo una naranja o tengo o una pera");
} else {
  console.log(fruta.length);
  console.log("Tengo una frutra exotica");
}

// ejercicio 1

// Juan obtuvo sus libreta de notas ayer y se entregaronsu nota  que contiene esto: A

// entonces A es aprobado , B aprovado a las justas y C es jalado

// queremos hacer una funcion que tome como parametro la nota y me diga sin estoy o no aprobado

// bucles
// una tarea repetitiva

// while
// para hacer bucles(aunque no es una regla), cuando queremos repetir cierto codigo, que no sabemos necesariamnete su limite

// le pido un valor al usuario, con prompt
// let ingresaUnValor = prompt("Ingresa un valor") || "";

// aca voy transformar mi valor de texto a Numero, con Number(valor_de_mi_texto)
// let miNumero = Number(ingresaUnValor);

//entonces ! = = , significa ->  diferente a

/// isNaN -> es una manera de saber si es numero o no es numero
// while (miNumero !== 5 && !Number.isNaN(miNumero)) {
//   console.log("Hola mundo: " + miNumero);
//   ingresaUnValor = prompt("Ingresa un valor") || "";
//   miNumero = Number(ingresaUnValor);
//   if (miNumero === 5) {
//     break;
//   }
// }

// NaN -> Not a Number -> No es un numero; este valor no es un numero

// 1. cuando yo le pido a un usuario que ingrese algo por el prompt , tengo dos opciones : que ingrese una cadena de texto O no ingrese nada -> string | null

// 2. una vez que  el usuario escribio algo, tengo una cadena de texto, o STRING
// 2.1 como funciona el casteo(conversion)?
// 2.1.1 , camino feliz: donde las cosas funcionan bien si o si y al primer intento - > en este caso esto pasa cuando en mi cadena de texto, tenga un STRING , que se pueda convertir a NUMBER
// 2.1.2, pero que es lo que paso aqui? paso que, cualquier otra cadena de texto que no sea un numero: '1' esto si puede convertir a numero, pero esto 'true', NO, y ahi es cuando se rompe , porque true(booleano), no es numero -> NaN

// !Number.isNaN(miNumero) -> al final devuelve un valor booleano(true/false) -> siginifica , cuando miNumero lo evaule esta condicion NaN, que pertenece al tipo Number , si no es un numero , entonces devuelve TRUE

// tenemos 3 partes:

// 1. !Number -> Number -> esto representa un numero -> !Number -> no es de tipo numero
// 2. .isNaN  -> aqui le digo que no es un numero
// 3. (miNumero) -> aca le paso el numero

// i++ -> significa que aumenta de 1 en 1 , seria el equivalente a i = i + 1 O i += 1
// let i = 0 -> seria el punto de partida
// i < 10 -> es la condicion que eventualmente me permitira salir del bucle
// i++ -> es como aumenta el punto de partida, es decir en este caso aumenta de 1 en 1
// lo que va dentro de las {} , se llama cuerpo del for, y es el codigo que quiero repetir cierta cantidad de veces

// let contador = 0;
// for (let i = 0; i < 10; i++) {
//   console.log("Hola mundo!!!" + i);
// }

// le pido un valor al usuario, con prompt
// let ingresaUnValor = prompt("Ingresa un valor") || "";
// let miNumero = Number(ingresaUnValor);

//for con condición basada en la entrada del usuario
// for (; miNumero !== 5 && !Number.isNaN(miNumero); ) {
//   console.log("Hola mundo: " + miNumero);
//   ingresaUnValor = prompt("Ingresa un valor") || "";
//   miNumero = Number(ingresaUnValor);
//   if (miNumero === 5) {
//     break;
//   }
// }

// export function precioConDescuentoMensual(tarifaPorHora, totalDias, descuento) {
//   const DIAS_POR_MES = 22;
//   const HORAS_POR_DIA = 8;
//   const tarifaPorDia = tarifaPorHora * HORAS_POR_DIA;

//   // Calcula cuántos meses completos hay
//   const mesesCompletos = Math.floor(totalDias / DIAS_POR_MES);
//   // Calcula los días restantes fuera de los meses completos
//   const diasRestantes = totalDias % DIAS_POR_MES;

//   // Tarifa mensual sin descuento
//   const tarifaMensual = tarifaPorDia * DIAS_POR_MES;
//   // Tarifa mensual con descuento aplicado
//   const tarifaMensualConDescuento = tarifaMensual * (1 - descuento);

//   // Total a pagar: meses completos con descuento + días restantes sin descuento
//   const total =
//     mesesCompletos * tarifaMensualConDescuento + diasRestantes * tarifaPorDia;

//   // Redondea hacia arriba al número entero más cercano
//   return Math.ceil(total);
// }

// for

// for (let item = 0; item < 5; item++) {
//   console.log(item);
// }

let misAmigos = ["Pedro", "Juan", "Beto", "Maria"];

// for (let i = 0; i < misAmigos.length; i++) {
//   let saludo = `Hola ${misAmigos[i]} , como estas?`;
//   console.log(saludo);
// }

for (const amigo of misAmigos) {
  let saludo = `Hola ${amigo} , como estas?`;
  console.log(saludo);
}

// objetos
// es una manera de alamacenar informacion

// JSON -> Javascript object notation -> Es la manera de Javascipr de escribir objetos

// key: value -> llave:valor , donde llave es un identidicador , tmb llamado propiedad
// y value es el valor de esa propiedad

let objeto = {
  llave: "valor",
  llave2: 1,
  llave3: true,
};

let objetoAjson: string = JSON.stringify(objeto); // objeto de JS a JSON

let JsonAobjeto = JSON.parse(objetoAjson); // JSON a objeto de JS

console.log("---------------------------------------------------------");
console.log(objetoAjson, "JSON");
console.log("---------------------------------------------------------");

console.log("---------------------------------------------------------");
console.log(JsonAobjeto, "OBJETO");
console.log("---------------------------------------------------------");

// iterador -> basicamente es "algo" que se puede recorrer

// un objeto , no es una coleccion de elementos
// un string si es una coleccion de elementos(caracteres)

let coleccionDeObjetos = [
  {
    llave: "objeto 1",
    llave2: 1,
    llave3: true,
  },
  {
    llave: "objeto 2",
    llave2: 2,
    llave3: true,
  },
  {
    llave: "objeto 3",
    llave2: 3,
    llave3: true,
  },
];

for (const { llave, llave2 } of coleccionDeObjetos) {
  let item = `${llave2}. ${llave}`;
  console.log(item);
}

// 1, ejercicio

// una interfaz sirve para definir como se ve mi valor, en este caso le digo que debera tres propeidades , cons sus respectivos tipos y se llamara Alumno
interface Alumno {
  id: number;
  nombre: string;
  notas: number[];
}

const alumno1 = {
  id: 1,
  nombre: "Pedro",
  notas: [12, 15, 16, 18],
};
const alumno2 = {
  id: 2,
  nombre: "Maria",
  notas: [12, 10, 18, 20],
};
const alumno3 = {
  id: 3,
  nombre: "Jose",
  notas: [20, 20, 10, 5],
};
const alumno4 = {
  id: 4,
  nombre: "Raul",
  notas: [12, 13, 14, 15],
};

const alumnos: Alumno[] = [alumno1, alumno2, alumno3, alumno4];

// Vamos a hacer una funcion que me sirva para detectar la nota mas alta de un grupo de alumnos y felictarlo con un mensaje al alumno que obtuvo el promedio mayor

// 1. vamos a recorrer a todos los alumnos y obtener su array de notas
// 2. sumar las 4 notas de cada alumno
// 3. sacar el promedio de notas de cada alumno ; como hacemos eso?: dividir la suma de notas entre la cantidad de notas
// 4. queremos quedarnos siempre con el ultimo valor mas alto
//5. asignar al objeto vacio alumno congratulado del cual proviene el promedio mas alto
// entonces guardo ese alumno , para poder usarlo despues

function felcitarAlumno(alumnos: Alumno[]): string {
  let alumnoCongratulado: Alumno = {
    id: 0,
    nombre: "",
    notas: [],
  };

  let promedioMayor = 0;

  for (const alumno of alumnos) {
    console.log(alumno.notas);
    let suma = 0;

    // este for es solamente para recorrer las notas de cada alumno

    // este for es equivalente al for each de abajo
    for (const nota of alumno.notas) {
      suma = suma + nota;
    }

    // este foreach es equivalente al for de arriba
    // suma = suma + nota es igual que decir suma += nota
    alumno.notas.forEach((nota) => (suma += nota));
    // significa una funcionalidad (suma += nota, por cada elemento (nota) , de mi array/coleccion de elementos (alumno.notas)

    console.log(suma);
    let promedio = suma / alumno.notas.length;
    console.log(promedio);

    if (promedio > promedioMayor) {
      promedioMayor = promedio;
      alumnoCongratulado = alumno;
    }
  }

  console.log(alumnoCongratulado);

  return `Felicitaciones ${alumnoCongratulado.nombre} tu promedio fue de ${promedioMayor}`;
}

const felicitacion = felcitarAlumno(alumnos);

console.log(felicitacion);

// la version JS

// @ts-ignore
function felicitarAlumnoJS(alumnos) {
  let alumnoCongratulado = {
    id: 0,
    nombre: "",
    notas: [],
  };

  let promedioMayor = 0;

  for (const alumno of alumnos) {
    let suma = 0;

    // este for es solamente para recorrer las notas de cada alumno
    for (const nota of alumno.notas) {
      suma = suma + nota;
    }

    let promedio = suma / alumno.notas.length;

    if (promedio > promedioMayor) {
      promedioMayor = promedio;
      alumnoCongratulado = alumno;
    }
  }

  return `Felicitaciones ${alumnoCongratulado.nombre} tu promedio fue de ${promedioMayor}`;
}

const felicitacionJS = felicitarAlumnoJS(alumnos);

console.log(felicitacionJS);

// Metodos especiales de los Array

// for-each

// aplica una fincionalidad en cada interacion(vuelta)

const letras = ["j", "o", "s", "u", "e"];

letras.forEach((letra) => console.log(letra.toLocaleUpperCase()));

// ... -> spread operator , operador de esparcimiento,
// me sirve para poner una cantidad varible(no se cuantos) de elementos,
// y los pone dentro de un array
const felicitarAlumno3 = (...alumnos: Alumno[]): string => {
  let alumnoCongratulado: Alumno = {
    id: 0,
    nombre: "",
    notas: [],
  };

  let promedioMayor = 0;

  alumnos.forEach((alumno) => {
    let suma = 0;
    alumno.notas.forEach((nota) => (suma = suma + nota));
    let promedio = suma / alumno.notas.length;
    if (promedio > promedioMayor) {
      promedioMayor = promedio;
      alumnoCongratulado = alumno;
    }
  });

  return `Felicitaciones ${alumnoCongratulado.nombre} tu promedio fue de ${promedioMayor}`;
};

const felicitacion3 = felicitarAlumno3(alumno1, alumno2, alumno3);

console.log(felicitacion3);

let nonbreSegundo = "patricio"; // los strings o textos , tambien son arrays

if (nonbreSegundo.includes("x")) {
  console.log("Hola patricio!!!");
} else {
  console.log("No eres patricio!!");
}

let numerosPrimos = [1, 3, 5, 7];

let alCuadrado = numerosPrimos.map((numero) => {
  return numero ** 3;
});

console.log(alCuadrado);

// numero1 ** numero2 - significa , que el numero1 estara elevado a la potencia(numero2), por ejmplo 2 al cuadrado seria algo asi : 2**2

// la diferencia , entre for-each y map, esq map si retorna/devuelve algo , for each , solo recorre, mas no devuelve
