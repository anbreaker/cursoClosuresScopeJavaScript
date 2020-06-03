// Hoisting
a = 2;
var a;
console.log(a);

console.log(a); // Error
var a = 2;

// Function
nameOfCat('Curro');
function nameOfCat(name) {
  console.log(name);
}
