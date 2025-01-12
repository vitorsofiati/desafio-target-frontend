import { exercicio1 } from './js/exercicio1.js';

// Exibir o resultado na tela
function exibirExercicio(enunciado, resultado) {
	document.getElementById('enunciado').innerText = enunciado;
	document.getElementById('resultado').innerText = resultado;
}

// Atribuindo os exercícios aos botões
window.exercicio1 = () => exercicio1(exibirExercicio);
