function checkDate(day) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // janvier = 0

  const content = document.getElementById("day-content");

  if (currentMonth !== 0 || currentDay > day) {
  //if (false) {  // ignore la date pour tester
    // On supprime le contenu du jour
    content.style.display = "none";

    // On crée le message de verrouillage
    const locked = document.createElement("div");
    locked.className = "home-container";
    locked.innerHTML = `
      <h1>⛔ Oups…</h1>
      <p>Cette surprise n’est pas encore disponible.</p>
      <p>Reviens le bon jour 💕</p>
    `;

    document.body.appendChild(locked);
  }
}
