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
      <h1>YAYYYYY YOU PICKED CORRECTLYYY💖😚</h1>
      <p>Thank you for saying yes ☹️<p>
      <p>You make me the happiest everrr >.< 👭🏽<p>
      <p>I'm SO SO SOOOO lucky to have you🍀<p>
      <p>I promise to love you forever and ever and everrrr ❤️🫵♾️‼️</p>
      <p>Happy Valentine’s Day to my beautiful perfectest Krishna baby 🥹💘</p>
    </div>
  `;
}

// floating emojis generator
const emojis = ["👭🏽", "💖", "❤️", "😚", "💋", "✨", "💝", "👩🏽‍❤️‍💋‍👩🏽", "🍀", "🫂"]; //add

setInterval(() => {
  const emoji = document.createElement("div");
  emoji.classList.add("heart"); // uses CSS for float animation

  // pick a random emoji
  const randomIndex = Math.floor(Math.random() * emojis.length);
  emoji.innerHTML = emojis[randomIndex];

  // random horizontal position
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.bottom = "0px";

  // random size (optional, cute effect)
  emoji.style.fontSize = (Math.random() * 30 + 15) + "px"; // 15px to 45px

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 4000);
}, 300);
