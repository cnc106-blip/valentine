const noBtn = document.getElementById("noBtn");

// make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button reaction
function yesClicked() {
  document.body.innerHTML = `
    <div class="container">
      <h1>YAYYYYY 💖😚</h1>
      <p>You make me the happiest everrr >.<p>
      <p>I love you always and always and alwaysss ❤️</p>
      <p>Happy Valentine’s Day Krishna baby 🥹💘</p>
    </div>
  `;
}

// floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 300);
