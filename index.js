function init() {
  const dice = document.querySelectorAll(".dice");

  dice.forEach((dice) => {
    dice.addEventListener("click", handleDiceClick);
  });
}

function handleDiceClick(_event) {
  // The Rolling Stones - Tumbling Dice [Official Lyric Video]
  window.open("https://youtu.be/EMoi_m2G6XU", "_blank", "noopener noreferrer");
}

window.addEventListener("load", init);
