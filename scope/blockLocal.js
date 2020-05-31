// Bloque Ejemplo 1
const fruits = () => {
  if (true) {
    var fruit1 = 'apple';
    var fruit2 = 'banana';
    var fruit3 = 'kiwi';
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();

// Bloque Ejemplo 2
const fruits2 = () => {
  if (true) {
    var fruit1 = 'apple';
    let fruit2 = 'banana'; // Solo acceso dentro de este Scope
    const fruit3 = 'kiwi'; // Solo acceso dentro de este Scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
};

fruits2();

// Bloque Ejemplo 3
let x = 1; // Global
{
  let x = 2; // Scope
  console.log(x);
}
console.log(x);

// Bloque Ejemplo 4
var x = 1; // Global
{
  var x = 2; // Global
  console.log(x);
}
console.log(x);

// Bloque Ejemplo 5
const anotherFuncition = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFuncition();

// Bloque Ejemplo 5
const anotherFuncition = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFuncition();
