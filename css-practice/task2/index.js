/* eslint-disable */

const playVideo = document.querySelector(".video-player");
const contineVideo = document.querySelector(".fa-play-circle");
const pauseVideo = document.querySelector(".fa-pause-circle");

playVideo.addEventListener("click", pauseVid, false);

function pauseVid() {
  const video = document.querySelector("video");
  video.paused ? video.play() : video.pause();
  pauseVideo.classList.toggle("hide-el");
  contineVideo.classList.toggle("hide-el");
}

// form validation
const signupForm = document.getElementById("signup");
signupForm.addEventListener("submit", validateForm.bind(null, "signup"), true);
signupForm.addEventListener("blur", validate, true);

const btnDisable = document.getElementById("submit-btn");

const patterns = {
  name: /^[a-z]{3,}/,
  email: /^[^@]+@[^@]+.[^@]{2,}$/,
  pass: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+-]).{6,20}/
};

function validateForm(id, e) {
  const inputArr = Array.from(document.getElementById(id).children);
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].classList.contains("invalid")) {
      btnDisable.classList.add("disable-submit");
      e.preventDefault();
      return false;
    }
  }
}

function validate(ev) {
  const pattern = patterns[ev.target.name];
  if (!ev.target.value) {
    ev.target.classList.remove("valid");
    ev.target.classList.add("invalid");
  }
  if (pattern.test(ev.target.value)) {
    ev.target.classList.remove("invalid");
    ev.target.classList.add("valid");
  } else {
    ev.target.classList.remove("valid");
    ev.target.classList.add("invalid");
  }
}
