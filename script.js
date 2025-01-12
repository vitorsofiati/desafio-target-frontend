import { exercicio1 } from './js/exercicio1.js';
import { exercicio2 } from './js/exercicio2.js';
import { exercicio3 } from './js/exercicio3.js';
import { exercicio4 } from './js/exercicio4.js';
import { exercicio5 } from './js/exercicio5.js';

// Exibir o resultado na tela
function exibirExercicio(enunciado, resultado) {
	document.getElementById('enunciado').innerText = enunciado;
	document.getElementById('resultado').innerText = resultado;
}

// Atribuindo os exercícios aos botões
window.executarExercicio1 = () => exercicio1(exibirExercicio);
window.executarExercicio2 = () => exercicio2(exibirExercicio);
window.executarExercicio3 = () => exercicio3(exibirExercicio);
window.executarExercicio4 = () => exercicio4(exibirExercicio);
window.executarExercicio5 = () => exercicio5(exibirExercicio);
