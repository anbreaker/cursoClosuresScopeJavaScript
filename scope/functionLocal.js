// Bloque Ejemplo 1
const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();

// Bloque Ejemplo 1 y 2
console.log(fruit); // Erro fuera del Scope Function

// Bloque Ejemplo 3
const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // let y = 2; --> No se puede reasignar
  console.log(x);
  console.log(y);
};

anotherFunction();
