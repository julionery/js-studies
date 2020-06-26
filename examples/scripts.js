console("Opa, estou funcionando.");

document.getElementById("titulo").innerHTML = "Opa, tudo bem?";

document.write("Algum Texto");

// window.alert("Mensagem de exemplo.");
alert("Mensagem de exemplo.");

console.log("A mensagem que eu inserir aqui aparecera no console.")

// VARIÁVEIS

var nome = "Julio";
var idade = 90;

console.log(nome, idade);

var x = 10;
var y= 15;

var total = x + y; 

console.log(total);

var nome = "Julio";
var sobrenome = "Cesar";

var nomecompleto = nome + " " + sobrenome;

console.log(nomecompleto);

// CONDICIONAIS

var hora = 9;

if ( hora < 12 ){
  console.log("Bom dia.");
} else if ( hora < 18 ){
  console.log("Boa tarde.");
}else if( hora <= 23 ){
  console.log("Boa noite.");
}

var hora2 = 9;
if ( hora2 >= 12 && hora2 < 18 ){
  console.log("Boa tarde.");
}

var hora3 = 18;
if(hora3 == 12 || hora3 == 18){
  console.log("Você está na hora do rush");
}

// VARIÁVEIS ES6

var nome = "Julio" // HOISTING - Enviada para o scopo geral da tela, podendo usar no window.

let nome = "Cesar" // Variável de escopo - funciona somente dentro do escopo no qual ela foi declarada.

const lastName = "Nery" // Não permite alteração da estrutura da variável, portanto não pode alterar os valores.
