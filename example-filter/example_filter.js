const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 10
  },
  {
    name: 'miau',
    type: 'cat',
    age: 2
  },
  {
    name: 'gulp',
    type: 'fish',
    age: 1
  }
]

console.log("Lista de Pets: ", pets);

const eMenorQueCinco = (numero) => {
  return numero < 5
}

// FILTER
// Cria um novo array com todos os elementos que passaram no teste da função fornecida.

const newPets = pets.filter(({age}) => eMenorQueCinco(age));
console.log("\nPets menor que 5 anos: ", newPets);


