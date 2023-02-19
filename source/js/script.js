const soundToggle = document.querySelector('.audio__icon');
const audioControls = document.querySelector('.audio-controls');
const soundOnToggle = document.querySelector('.audio__on');
const soundOffToggle = document.querySelector('.audio__off');
const play = document.querySelector(".button__play");

const context = new AudioContext();

document.querySelector('.list--links').addEventListener('mouseenter', () => {
  // resume() method is only allowed if the audio playback is available
  context.resume().then(() => {
    audioControls.play()
    soundToggle.classList.remove('visually-hidden');
  }).catch(() => console.log('not allowed'));
})

document.body.addEventListener("pointerenter", () => {
  console.log('pointer enter has fired')
  audioControls.play();
})

soundToggle.addEventListener('click', function () {
  if (soundOffToggle.classList.contains('visually-hidden')) {
    soundOnToggle.classList.add('visually-hidden');
    soundOffToggle.classList.remove('visually-hidden');
    audioControls.muted = true;
  } else {
    soundOnToggle.classList.remove('visually-hidden');
    soundOffToggle.classList.add('visually-hidden');
    audioControls.muted = false;
  }
});