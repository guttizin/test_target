// Questão 4: Percentual de Representação
function percentualRepresentacao() {
  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const total = Object.values(faturamentoEstados).reduce((acc, v) => acc + v, 0);
  const percentualRepresentacaoResultado = document.getElementById('percentualRepresentacaoResultado');
  
  for (const estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / total) * 100;
    percentualRepresentacaoResultado.textContent += `${estado}: ${percentual.toFixed(2)}%\n`;
  }
}