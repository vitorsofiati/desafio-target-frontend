export function exercicio1(exibirExercicio) {
	const enunciado = `1) Dado o código:
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
  K = K + 1;
  SOMA = SOMA + K;
}
Imprimir(SOMA);
Qual será o valor de SOMA ao final?`;
	const indice = 13;
	let soma = 0;
	let k = 0;

	for (let k = 0; k < indice; k++) {
		soma += k;
	}
	exibirExercicio(enunciado, `O valor final da soma é: ${soma}`);
}
