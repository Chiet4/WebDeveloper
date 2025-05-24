document.body.addEventListener("keyup", (event) => {
  tocarSound(event.code.toLowerCase());
});

function tocarSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
}
