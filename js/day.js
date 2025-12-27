function checkDate(day) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  const content = document.getElementById("content");

  if (currentMonth !== 0 || currentDay !== day) {
    content.innerHTML = `
      <h1>⛔ Oups…</h1>
      <p>Cette surprise n’est pas encore disponible.</p>
      <p>Reviens le bon jour 💕</p>
    `;
  } else {
    content.innerHTML = `
      <h1>✨ Surprise ✨</h1>
      <p>Le contenu apparaîtra ici 💖</p>
    `;
  }
}
