import { exercicio1 } from './js/exercicio1.js';
import { exercicio2 } from './js/exercicio2.js';

// Exibir o resultado na tela
function exibirExercicio(enunciado, resultado) {
	document.getElementById('enunciado').innerText = enunciado;
	document.getElementById('resultado').innerText = resultado;
}

// Atribuindo os exercícios aos botões
window.executarExercicio1 = () => exercicio1(exibirExercicio);
window.executarExercicio2 = () => exercicio2(exibirExercicio);
