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

// REDUCE

// const totalWeightDog = pets.reduce((total, {type, weight}) => { 
//   if(type !== 'dog') return total;
//   return total + weight;
// }, 0); // 0 = Valor inicial

// console.log("\nTotal dos pesos dos Cachorros: ", totalWeightDog);


// FILTER E REDUCE
const dogs = pets.filter((pet) =>{
  return pet.type === 'dog';
})

console.log("\nCachorros: ", dogs);

const totalWeightDog = dogs.reduce((total, {weight}) => { 
  return total + weight;
}, 0); // 0 = Valor inicial

console.log("\nTotal dos pesos dos Cachorros: ", totalWeightDog);

// ENCADEANDOO

const totalWeightDogEncadeado = pets.filter((pet) =>{
  return pet.type === 'dog';
}).reduce((total, {weight}) => { 
  return total + weight;
}, 0); 

console.log("\nTotal dos pesos encadeados dos Cachorros: ", totalWeightDogEncadeado);
