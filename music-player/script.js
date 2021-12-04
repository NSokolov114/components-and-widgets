'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const img = document.querySelector('img'),
    title = document.querySelector('.title'),
    artist = document.querySelector('.artist'),
    music = document.querySelector('audio'),
    progressContainer = document.querySelector('.progress-container'),
    progress = document.querySelector('.progress'),
    currentTimeEl = document.querySelector('.current-time'),
    durationEl = document.querySelector('.duration'),
    prevBtn = document.querySelector('.prev'),
    playBtn = document.querySelector('.play'),
    nextBtn = document.querySelector('.next'),
    songs = [
      {
        name: 'jacinto-1',
        displayName: 'Best song there is',
        artist: 'Jacinto',
      },
      {
        name: 'jacinto-2',
        displayName: 'Second best song',
        artist: 'Jacinto',
      },
      {
        name: 'jacinto-3',
        displayName: 'Third song',
        artist: 'Jacinto',
      },
      {
        name: 'metric-1',
        displayName: 'The last song ',
        artist: 'Metric',
      },
    ];

  let isPlaying = false,
    songIndex = 1;

  function playSong() {
    music.play();
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
  }

  function pauseSong() {
    music.pause();
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
  }

  function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `./music/${song.name}.mp3`;
    img.src = `./img/${song.name}.jpg`;
  }

  function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
  }

  function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playSong();
  }

  function updateProgressBar(e) {
    if (!isPlaying) return;

    const { duration, currentTime } = e.srcElement,
      progressPercent = Math.round((1000 * currentTime) / duration),
      durationMins = Math.floor(duration / 60),
      durationSecs = (duration % 60).toFixed(0),
      currentMins = Math.floor(currentTime / 60),
      currentSecs = (currentTime % 60).toFixed(0);

    progress.style.width = `${progressPercent / 10}%`;
    if (currentTime) {
      durationEl.textContent = `${durationMins}:${
        durationSecs > 9 ? durationSecs : '0' + durationSecs
      }`;
      currentTimeEl.textContent = `${currentMins}:${
        currentSecs > 9 ? currentSecs : '0' + currentSecs
      }`;
    }
  }

  function setProgressBar(e) {
    const width = this.clientWidth,
      clickPosition = e.offsetX,
      { duration } = music;

    progress.style.width = `${(clickPosition / width) * 100}%`;
    music.currentTime = (clickPosition / width) * duration;
  }

  loadSong(songs[songIndex]);

  playBtn.addEventListener('click', () =>
    isPlaying ? pauseSong() : playSong()
  );

  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);
  music.addEventListener('timeupdate', updateProgressBar);
  music.addEventListener('ended', nextSong);
  progressContainer.addEventListener('click', setProgressBar);
}
