export function exercicio2(exibirExercicio) {
	const enunciado = `2) Dado a sequência de Fibonacci:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
Informe um número e descubra se ele pertence à sequência.`;

	const input = parseInt(prompt('Informe um número:'));

	// validar o input
	if (isNaN(input))
		return exibirExercicio(enunciado, 'Por favor, insira um número válido.');

	let a = 0,
		b = 1,
		pertence = false;

	while (a <= input) {
		if (a === input) {
			pertence = true;
			break;
		}

		let proximo = a + b;
		a = b;
		b = proximo;
	}

	exibirExercicio(
		enunciado,
		pertence
			? `O número ${input} pertence à sequência de Fibonacci.`
			: `O número ${input} não pertence à sequência de Fibonacci.`
	);
}
