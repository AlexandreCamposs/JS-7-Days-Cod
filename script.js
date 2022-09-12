document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
  let som = document.querySelector('#input').value;
  if (som !== '') {
    let somArray = som.split('');
    playCompositon(somArray);
  }
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.toggle('active');
    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 300);
  }
}
function playCompositon(somArray) {
  let aguarde = 0;
  for (let somItem of somArray) {
    setTimeout(()=>{
      playSound(`key${somItem}`);
    }, aguarde);
    aguarde += 250;
  }
}
