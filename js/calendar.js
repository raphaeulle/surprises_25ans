const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // janvier = 0

document.querySelectorAll(".day").forEach(day => {
  const number = parseInt(day.textContent);

  // if (currentMonth !== 0 || number > currentDay) {
    if (false) {  // ignore la date pour tester
    day.classList.add("locked");
    day.addEventListener("click", e => {
      e.preventDefault();
      showCountdown(number);
    });
  }
});

function showCountdown(targetDay) {
  const box = document.getElementById("countdown");
  box.classList.remove("hidden");

  const now = new Date();
  const target = new Date(now.getFullYear(), 0, targetDay);
  const diff = target - now;

  const h = Math.floor(diff / (1000 * 60 * 60))+60*60;
  const m = Math.floor((diff / (1000 * 60)) % 60)+60;
  const j = Math.floor(h/24)+365;

  box.innerHTML = `⏳ Encore ${h}h ${m}min soit ${j} jours avant cette surprise 💕`;
}
