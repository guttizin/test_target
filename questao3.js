// Questão 3: Faturamento
function calcularFaturamento() { 
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        document.getElementById('faturamentoResultado').textContent = 'Nenhum arquivo selecionado.';
        return;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    
    reader.onload = function(e) {
        try {
            const dados = JSON.parse(e.target.result);
            const faturamentos = dados.filter(d => d.valor > 0).map(d => d.valor);
            const menor = Math.min(...faturamentos);
            const maior = Math.max(...faturamentos);
            const media = faturamentos.reduce((acc, v) => acc + v, 0) / faturamentos.length;
            const diasAcimaMedia = faturamentos.filter(v => v > media).length;
            document.getElementById('faturamentoResultado').textContent =
                `Menor faturamento: ${menor.toFixed(4)}\n` +
                `Maior faturamento: ${maior.toFixed(4)}\n` +
                `Média de faturamento: ${media.toFixed(4)}\n` +
                `Dias com faturamento acima da média: ${diasAcimaMedia}\n`;
        } catch (error) {
            document.getElementById('faturamentoResultado').textContent = 'Arquivo não é um JSON válido.';
            return;
        }
    }
}