const soundToggle = document.querySelector('.audio__icon');
const audioControls = document.querySelector('.audio-controls');
const soundOnToggle = document.querySelector('.audio__on');
const soundOffToggle = document.querySelector('.audio__off');

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