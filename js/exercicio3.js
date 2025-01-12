export function exercicio3(exibirExercicio) {
	const enunciado = `3) Dado um vetor com os valores de faturamento diário de uma distribuidora, calcular:
- O menor valor de faturamento ocorrido em um dia do mês.
- O maior valor de faturamento ocorrido em um dia do mês.
- O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.`;

	// Carregar o JSON
	fetch('./material-apoio/dados.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Erro ao carregar o arquivo JSON');
			}
			return response.json();
		})
		.then((dados) => {
			// Acredito que os dias sem faturamento sejam sábados, domingos e feriados, então desconsiderei do cálculo (espero que seja isso)
			const faturamentos = [];
			for (let i = 0; i < dados.length; i++) {
				if (dados[i].valor > 0) {
					faturamentos.push(dados[i].valor);
				}
			}

			// Achar o menor valor
			let menorValor = faturamentos[0];
			for (let i = 1; i < faturamentos.length; i++) {
				if (faturamentos[i] < menorValor) {
					menorValor = faturamentos[i];
				}
			}

			// achar maior valor
			let maiorValor = faturamentos[0];
			for (let i = 1; i < faturamentos.length; i++) {
				if (faturamentos[i] > maiorValor) {
					maiorValor = faturamentos[i];
				}
			}

			// calcular a média
			let soma = 0;
			for (let i = 0; i < faturamentos.length; i++) {
				soma += faturamentos[i];
			}
			const media = soma / faturamentos.length;

			// dias com faturamento acima da média
			let diasBons = 0;
			for (let i = 0; i < faturamentos.length; i++) {
				if (faturamentos[i] > media) {
					diasBons++;
				}
			}

			// Resultados
			const resultado = `
        Menor valor de faturamento: ${menorValor.toFixed(2)}
        Maior valor de faturamento: ${maiorValor.toFixed(2)}
        Dias com faturamento acima da média: ${diasBons}
      `;
			exibirExercicio(enunciado, resultado);
		});
}
