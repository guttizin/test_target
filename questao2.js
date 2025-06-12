// Questão 2: Sequência de Fibonacci
function ehFibonacci() {
    const n = parseInt(document.getElementById('fiboInput').value);
    const resultado = document.getElementById('fiboResultado');
    if (isNaN(n)) {
      resultado.textContent = 'Por favor, digite um número válido.';
      return;
    }
    if (n < 0) {
      resultado.textContent = `O número NÃO pertence à sequência de Fibonacci.`;
      return;
    }
    let a = 0, b = 1;
    while (b < n) {
        var temp = b;
        b = a + b;
        a = temp;
    }

    if(n === b || n === 0){
        resultado.textContent = `O número ${n} pertence à sequência de Fibonacci.`;
    }else{
        resultado.textContent = `O número ${n} NÃO pertence à sequência de Fibonacci.`;
    }
}