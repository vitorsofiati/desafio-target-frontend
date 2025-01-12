export function exercicio5(exibirExercicio) {
	const enunciado = `5) Escreva um programa que inverta os caracteres de um string.`;

	// obter a string
	const inputString = prompt('Digite uma string:');

	// Validando o input
	if (inputString === null || inputString.trim() === '') {
		alert('Por favor, insira uma string válida.');
		return;
	}

	// Resultados
	let resultado = '';
	for (let i = inputString.length - 1; i >= 0; i--) {
		resultado += inputString[i];
	}

	exibirExercicio(enunciado, `A string invertida é: ${resultado}`);
}
