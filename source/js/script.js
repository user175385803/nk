const soundToggle = document.querySelector('.audio__on-icon');
const audioControls = document.querySelector('.audio-controls');
const soundOffToggle = document.querySelector('.audio__off');

soundToggle.addEventListener('click', function () {
  audioControls.muted = true;
  soundOffToggle.classList.remove('visually-hidden');
});