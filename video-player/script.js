'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const player = document.querySelector('.player'),
    video = document.querySelector('video'),
    progressRange = document.querySelector('.progress-range'),
    progressBar = document.querySelector('.progress-bar'),
    playBtn = document.querySelector('.play-controls i'),
    volumeIcon = document.querySelector('.volume-icon i'),
    volumeRange = document.querySelector('.volume-range'),
    volumeBar = document.querySelector('.volume-bar'),
    currentTime = document.querySelector('.time-elapsed'),
    duration = document.querySelector('.time-duration'),
    speed = document.querySelector('.player-speed'),
    fullscreenBtn = document.querySelector('.fullscreen');

  let lastVolume = 1,
    fullscreen = false;

  function togglePlay() {
    if (video.paused) {
      video.play();
      playBtn.classList.replace('fa-play', 'fa-pause');
      playBtn.setAttribute('title', 'pause');
    } else {
      video.pause();
      showPlayIcon();
    }
  }

  function showPlayIcon() {
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'play');
  }

  function updateProgress() {
    progressBar.style.width = `${(100 * video.currentTime) / video.duration}%`;
    currentTime.textContent = `${displayTime(video.currentTime)} / `;
    duration.textContent = `${displayTime(video.duration)}`;
  }

  function displayTime(time) {
    const mins = Math.floor(time / 60);
    let secs = Math.floor(time % 60);

    secs = secs < 10 ? `0${secs}` : secs;
    return `${mins}:${secs}`;
  }

  function setProgress(e) {
    const newTime = e.offsetX / progressRange.offsetWidth;

    progressBar.style.width = `${Math.round(100 * newTime)}%`;
    video.currentTime = newTime * video.duration;
  }

  function changeVolume(e) {
    let volume = e.offsetX / volumeRange.offsetWidth;

    volume = volume < 0.1 ? 0 : Math.ceil(volume * 10) / 10;
    volumeBar.style.width = `${volume * 100}%`;
    video.volume = volume;
    volumeIcon.className = '';
    setVolumeIcon(volume);
    lastVolume = volume;
  }

  function setVolumeIcon(volume) {
    if (volume >= 0.6) {
      volumeIcon.classList.add('fas', 'fa-volume-up');
    } else if (volume >= 0.1) {
      volumeIcon.classList.add('fas', 'fa-volume-down');
    } else {
      volumeIcon.classList.add('fas', 'fa-volume-off');
    }
  }

  function toggleMute() {
    volumeIcon.className = '';
    if (video.volume) {
      lastVolume = video.volume;
      video.volume = 0;
      volumeBar.style.width = 0;
      volumeIcon.classList.add('fas', 'fa-volume-mute');
      volumeIcon.setAttribute('title', 'unmute');
    } else {
      video.volume = lastVolume;
      volumeBar.style.width = `${lastVolume * 100}%`;
      setVolumeIcon(lastVolume);
      volumeIcon.setAttribute('title', 'mute');
    }
  }

  function changeSpeed() {
    video.playbackRate = speed.value;
  }

  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }

    video.classList.add('video-fullscreen');
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    video.classList.remove('video-fullscreen');
  }

  function toggleFullscreen() {
    fullscreen ? closeFullscreen() : openFullscreen(player);
    fullscreen = !fullscreen;
  }

  playBtn.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);
  video.addEventListener('ended', showPlayIcon);
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('canplay', updateProgress);
  progressRange.addEventListener('click', setProgress);
  volumeRange.addEventListener('click', changeVolume);
  volumeIcon.addEventListener('click', toggleMute);
  speed.addEventListener('change', changeSpeed);
  fullscreenBtn.addEventListener('click', toggleFullscreen);
}
