const person = () => {
  var saveName = 'anbreaker';
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

let newPerson = person();
console.log(newPerson.getName()); // anbreaker.
newPerson.setName('Jéssica'); // Sobre escribo la variable saveName.
console.log(newPerson.getName()); // Se pregunta el nombre de la variebla saveName que ya fue sobre escrita
