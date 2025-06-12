// Questão 5: Inverter String
function inverterString() {
    const string = document.getElementById('inverterInput').value;
    const resultado = document.getElementById('inverterResultado');
    let stringInvertida = '';
    for(let i = string.length - 1; i >= 0; i--){
      stringInvertida += string[i];
    }
    resultado.textContent = stringInvertida;
  }