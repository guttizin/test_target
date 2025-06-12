// Questão 1: Soma dos Números
function somarNumeros(){
    let indice = 13;
    let soma = 0;
    let K = 0;

    while (K < indice) {
        K = K + 1;
        soma = soma + K;
    }

    const resultado = document.getElementById('somaResultado');
    resultado.textContent = 'A soma dos números é: ' + soma;
}