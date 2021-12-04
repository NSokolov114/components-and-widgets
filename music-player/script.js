'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const music = document.querySelector('audio');
  const prevBtn = document.querySelector('.prev');
  const playBtn = document.querySelector('.play');
  const nextBtn = document.querySelector('.next');

  let isPlaying = false;

  function playSong() {
    music.play();
    isPlaying = true;

    playBtn.classList.replace('fa-play', 'fa-pause');
  }

  function pauseSong() {
    music.pause();
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
  }

  playBtn.addEventListener('click', () =>
    isPlaying ? pauseSong() : playSong()
  );

  // function playSong() {
  //   music.play();
  // }
}
