const myVideo =document.querySelector("#my-video");
console.log(myVideo)

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img")
console.log(playPauseImg);


function toggleVideo() {
   if (myVideo.paused || myVideo.ended) {
    playPauseImg.scr ="https://img.icons8.com/ios-glyphs/30/play--v2.png"
    myVideo.play();
   } else{
    playPauseImg.scr ="https://img.icons8.com/ios-glyphs/30/pause--v2.png"
    myVideo.pause();
   }
}

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton)

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
    if (myVideo.muted){
        muteUnmuteButton.style.backgroundColour = "#d5cea3";
        myVideo.muted = false;
    } else {
        muteUnmuteButton.style.backgroundColour = "#827f6d";
        myVideo.muted = true;
    }
}
myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector('#progress-bar-fill');
console.log(progressBarFill);

function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    console.log(progress);
    progressBarFill.style.width = progress + "%";
}


