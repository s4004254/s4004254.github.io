const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
//I adjusted the colour of the pause and play buttons as well 
//as the mute button to be the same hue as the type. This is aimed 
//to produce a connection with the different assets. Changing the 
//colour to stark white aims to bring the attention of the user towards
// the buttons as it directly contrasts the black background
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    playPauseImg.style.backgroundColour = "#ffffff";
    video.paused = false;
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    playPauseImg.style.backgroundColour = "#a5a5a5";
    video.play = true;
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
const muteUnmuteButton = document.querySelector("#mute-unmute-buttn");

function toggleSound() {
    if (video.muted) {
        video.muted = false;
        muteUnmuteButton.querySelector("img").src = "https://icons8.com/icon/reqgj3e1uKBy/audio";
        muteUnmuteButton.style.backgroundColor = "#ffffff";
    } else {
        video.muted = true;
        muteUnmuteButton.querySelector("img").src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
        muteUnmuteButton.style.backgroundColor = "#a5a5a5";
    }
}
