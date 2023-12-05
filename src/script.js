// Define a data final
const countDownDate = new Date("Jul 14, 2024 00:00:00").getTime();

// Atualiza o contador a cada segundo
const x = setInterval(function () {
  // Pega a data atual
  const now = new Date().getTime();

  // Calcula a diferença entre a data final e a data atual
  const distance = countDownDate - now;

  // Calcula os dias restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Separa os dígitos do número de dias
  const one = Math.floor(days / 100);
  const two = Math.floor((days % 100) / 10);
  const three = days % 10;

  // Atualiza os elementos HTML com os valores dos dígitos
  document.getElementById("one").innerHTML = one;
  document.getElementById("two").innerHTML = two;
  document.getElementById("three").innerHTML = three;

  // Se a contagem regressiva terminar, exibe uma mensagem
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRADO";
  }
}, 1000);
