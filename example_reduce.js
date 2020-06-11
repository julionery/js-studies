const pets = [
  {
    type: 'dog',
    name: 'bolinha',
    age: 15,
    weight: 30
  },
  {
    type: 'cat',
    name: 'mingal',
    age: 6,
    weight: 2
  },
  {
    type: 'fish',
    name: 'gulp',
    age: 1,
    weight: 0.01
  },
  {
    type: 'dog',
    name: 'rex',
    age: 4,
    weight: 5
  },
  {
    type: 'cat',
    name: 'marrom',
    age: 2,
    weight: 1
  },
  {
    type: 'horse',
    name: 'pé de pano',
    age: 1,
    weight: 100
  },
]

console.log("Lista de Pets: ", pets);

/**
 * REDUCE
 * Reduzir para um unico valor
 */ 

const totalWeight = pets.reduce((total, {weight}) => { 
  return total + weight;
}, 0); // 0 = Valor inicial

console.log("Total de pesos: ", totalWeight);
 
// REDUCE RETURN OBJECT

const totais = pets.reduce((total, {age, weight}) => { 
  return { 
    totalAge: total.totalAge + age,
    totalWeight: total.totalWeight + weight,
  }
}, { totalAge: 0, totalWeight: 0 });

console.log("Totais: ", totais);

// REDUCE - Reduzindo do map e filter.

const totalWeightDog = pets.reduce((total, {type, weight}) => { 
  if(type !== 'dog') return total;
  return total + weight;
}, 0); // 0 = Valor inicial

console.log("Total dos pesos dos Cachorros: ", totalWeightDog);