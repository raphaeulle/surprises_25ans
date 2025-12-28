function checkDate(day) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // janvier = 0

  const content = document.getElementById("content");

  // if (currentMonth !== 0 || currentDay !== day) {
    if (false) {  // ignore la date pour tester
    content.innerHTML = `
      <h1>⛔ Oups…</h1>
      <p>Cette surprise n’est pas encore disponible.</p>
      <p>Reviens le bon jour 💕</p>
    `;
  }
}
