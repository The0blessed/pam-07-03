function olamundo() {    
  alert('Olá Mundo');}
function calculareficiencia() 
{    var km, gas, consumo, marca, modelo
  
  km = document.getElementById('km').value    
    gas = document.getElementById('litro').value
 marca = document.getElementById('marca').value
  modelo = document.getElementById('modelo').value
      consumo = km / gas    
        alert ("Seu " +marca+" "+modelo+" fez "+consumo+" em quilômetro por litro")}