// Bloque Ejemplo 1
var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};
anotherFunction();

// ---------------------MALAS PRACTICAS---------------------
// Bloque Ejemplo 2
// Declarar solo nombre de variables sin 'tipo'.
const helloWorlds = () => {
  global = 'helloooo';
};
helloWorlds();
console.log(global);

// Bloque Ejemplo 3
// Declarar variables dentro de la función dos veces:
const helloWorlds = () => {
  var global1 = (globalVar = 'helloooo anbreaker');
};
helloWorlds();
console.log(globalVar);
