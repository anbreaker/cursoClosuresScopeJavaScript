// El for termina mucho antes que el primer setTimeOut y por eso vale 10.
// Explico, al declarar la variable i con “var”, queda en el scope de
// la función, por lo que el al ejecutarse el primer console.log, i vale 10,
// debido a que “var” existe en toda la función, no solo en el for.
// En cambio, al declararlar con let, la variable i sólo existe en
// el scope del bloque del for, entonces, al iterarse, sí o sí, toma el valor actual de i.

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
};
anotherFunction();
