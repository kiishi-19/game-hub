// Animate cards in on load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".game-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(16px)";
    card.style.transition = `opacity 0.3s ease ${i * 60}ms, transform 0.3s ease ${i * 60}ms, border-color 0.15s ease, background 0.15s ease`;
    requestAnimationFrame(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  });
});
