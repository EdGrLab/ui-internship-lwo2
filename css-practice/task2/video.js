// /* eslint-env browser*/
const playVideo = document.querySelector('.video-player');
const contineVideo = document.querySelector('.fa-play-circle');
const pauseVideo = document.querySelector('.fa-pause-circle');

function pauseVid() {
  const video = document.querySelector('video');
  video.paused ? video.play() : video.pause();
  pauseVideo.classList.toggle('hide-el');
  contineVideo.classList.toggle('hide-el');
}

const videoAPI = {
  init: () => {
    playVideo.addEventListener('click', pauseVid);
  },
};

export default videoAPI;
