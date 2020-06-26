function alterar() {
  document.getElementById("titulo").innerHTML = "Trocou o título!";
  document.getElementById('campo').value = "Trocou o campo!";
}

// alterar();

function alterar2(titulo, campo) {
  document.getElementById("titulo").innerHTML = titulo;
  document.getElementById('campo').value = campo;
}

alterar2("Trocou o título 2!", "Trocou o campo 2!");

function somar(x, y){
  // Função sem retorno e variavel de contexto;
  let total = x + y;
  document.getElementById("paragrafo").innerHTML= `Soma ${x} + ${y} = ${total}`;
}

somar(2, 8);

function multiplicar(x, y){
  // Função com retorno;
  return x * y;
}

var resultado = multiplicar(5,10);
console.log(resultado);