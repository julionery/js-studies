function digitou(e){
  console.log(e);
  console.log("Você clicou: "+ e.key);

  if(e.keyCode == 13){
    let texto = document.getElementById("campo1").value;
    alert(texto);
  }

  if(e.keyCode == 13 && e.ctrlKey == true){
    let texto = document.getElementById("campo1").value;
    alert("Com ctrl pressionado: " + texto);
  }
}