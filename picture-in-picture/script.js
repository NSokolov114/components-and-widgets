'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const videoElement = document.querySelector('.video'),
    button = document.querySelector('.button');

  // screen capture API
  async function selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();

      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    } catch (error) {
      console.log(`There's an error: ${error}`);
    }
  }

  button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
  });

  selectMediaStream();
}
