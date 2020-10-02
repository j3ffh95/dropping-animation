const createEmoji = () => {
  const emojiElement = document.createElement("div");
  const emojisArray = ["⚽️", "🍕", "🍔", "🍌", "🍟", "🌮", "🌯", "🍩"];
  emojiElement.classList.add("emoji");

  emojiElement.style.left = Math.random() * 100 + "vw";
  emojiElement.style.animationDuration = Math.random() * 2 + 3 + "s";

  emojiElement.innerText =
    emojisArray[Math.floor(Math.random() * emojisArray.length)];

  document.body.appendChild(emojiElement);

  setTimeout(() => {
    emojiElement.remove();
  }, 5000);
};

setInterval(createEmoji, 300);
