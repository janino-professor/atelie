document.addEventListener("DOMContentLoaded", function () {
    // -----------------------------------------------------------------------------
    // CONTAGEM REGRESSIVA PARA 31 DE OUTUBRO
    // -----------------------------------------------------------------------------
    function updateCountdown() {
        const currentYear = new Date().getFullYear();
        let targetDate = new Date(`October 31, ${currentYear} 00:00:00`).getTime();
        const now = new Date().getTime();
        let difference = targetDate - now;

        // Se o dia 31 de Outubro do ano atual já passou, ajusta para o próximo ano
        if (difference < 0) {
            targetDate = new Date(`October 31, ${currentYear + 1} 00:00:00`).getTime();
            difference = targetDate - now;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("mins");
        const secsEl = document.getElementById("secs");

        if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        if (minsEl) minsEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if (secsEl) secsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // Executa imediatamente e atualiza a cada 1 segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // -----------------------------------------------------------------------------
    // ROLAGEM SUAVE PARA OS LINKS DO MENU
    // -----------------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});