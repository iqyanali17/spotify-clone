// script.js

// Select elements
let playButton = document.querySelector(".player-control-icon:nth-child(3)");
let progressBar = document.querySelector(".progress-bar");
let currentTime = document.querySelector(".curr-time");
let totalTime = document.querySelector(".tot-time");

// Load your audio file
let audio = new Audio("Daylight-chosic.com_.mp3");  // Make sure this file is in your project folder

let isPlaying = false;

// Function to format time in MM:SS
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

// Play/Pause toggle
playButton.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playButton.style.opacity = "1";
    } else {
        audio.pause();
        isPlaying = false;
        playButton.style.opacity = "0.7";
    }
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;

    // Update current time
    currentTime.innerText = formatTime(audio.currentTime);

    // Update total time
    totalTime.innerText = formatTime(audio.duration);
});

// Seek in song using progress bar
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
});
