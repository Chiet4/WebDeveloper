document.body.addEventListener("keyup", (event) => {
  tocarSound(event.code.toLowerCase());
});

function tocarSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key=${sound}]`);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}
