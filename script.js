// Data da Abertura do Portal
const LAUNCH_DATE = "2026-10-31T19:00:00-03:00";

const pad = (n) => String(Math.max(0, n)).padStart(2, "0");

function updateCountdown() {
  const target = new Date(LAUNCH_DATE).getTime();
  const now = Date.now();
  let distance = target - now;

  if (distance < 0) distance = 0;

  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const daysEl = document.querySelector("#days");
  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");

  if (daysEl) daysEl.textContent = pad(days);
  if (hoursEl) hoursEl.textContent = pad(hours);
  if (minutesEl) minutesEl.textContent = pad(minutes);
  if (secondsEl) secondsEl.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Menu Hambúrguer (Mobile)
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Envio do Formulário para o WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const formWhatsapp = document.getElementById("form-whatsapp");

  if (formWhatsapp) {
    formWhatsapp.addEventListener("submit", function (e) {
      e.preventDefault();

      // INSIRA AQUI O SEU NÚMERO DE WHATSAPP (Com código do país 55 + DDD + Número)
      const numeroWhatsApp = "5561985398914";

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;

      // Texto que será enviado pré-formatado
      const texto = `Olá! Vim pelo formulário do site.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Mensagem:* ${mensagem}`;

      // Abre a conversa do WhatsApp em uma nova aba
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
    });
  }
});