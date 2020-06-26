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
 * MAP
 * Retorna um novo array com a mesma quantidade de elementos
 * que o array inicial
 */ 

 const petNames = pets.map(({name}) => { return name; });

 console.log("Nome dos pets: ", petNames);