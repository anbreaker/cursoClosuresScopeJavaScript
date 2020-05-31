// Bloque Ejemplo 1
const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld();

console.log(hello); // Error

// Bloque Ejemplo 2
var scope = 'I am Global';

const functionScope = () => {
  var scope = ' I am just a local';
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
console.log(scope, '--> Este es Var global');
