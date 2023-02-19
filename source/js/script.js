const soundToggle = document.querySelector('.audio__on-icon');
const audioControls = document.querySelector('.audio-controls');
const soundOffToggle = document.querySelector('.audio__off');

window.onload = function () {
  document.getElementById("my_audio").play();
}

soundToggle.addEventListener('click', function () {
  if (soundOffToggle.classList.contains('visually-hidden')) {
    soundOffToggle.classList.remove('visually-hidden');
    audioControls.muted = true;
  } else {
    soundOffToggle.classList.add('visually-hidden');
    audioControls.muted = false;
  }
});