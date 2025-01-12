export function extra(exibirExercicio) {
	const enunciado = `Exercício Extra: CONTRATE O VITOR!`;
	const email = 'vitorsofiati@outlook.com';

	const mensagem = ` <p>
  Se você está procurando um profissional competente e dedicado, que tem tudo pra crescer e se tornar um dev TOP, o Vitor é a pessoa certa para a sua equipe!<br><br>

  Aqui estão alguns motivos para contratá-lo:<br>
  <ul>
      <li>Habilidades em tecnologias como Angular, ASP.NET Core e TypeScript;</li>
      <li>Experiência em versionamento de código com GIT / Github e metodologias ágeis com JIRA;</li>
      <li>Muita vontade de aprender e crescer profissionalmente.</li>
  </ul>

  e por último, mas não menos importante:<br>

  <ul>
      <li>Ele quer muito fugir das DUAS HORAS de ônibus até o trabalho presencial dele, então eu garanto que ele vai dar o máximo sempre para aproveitar essa oportunidade;</li>
  </ul><br>

  Você pode entrar em contato através do email: <a href="mailto:vitorsofiati@outlook.com">vitorsofiati@outlook.com</a>
  </p>
`;

	document.getElementById('enunciado').innerHTML = enunciado;
	document.getElementById('resultado').innerHTML = mensagem;
}
