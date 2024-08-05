document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".main--video-container video");
    const playButton = document.getElementById("video-pause-btn");
    const muteButton = document.getElementById("video-mute-btn");

    // 비디오 재생, 일시정지
    playButton.addEventListener("click", () => {
        if (video.paused) {      // 비디오 재생 시 일시정지 버튼으로 변경
            video.play();
            playButton.textContent = '⏸'; 
        } else {                // 일시정지 시 재생 버튼으로 변경
            video.pause();
            playButton.textContent = '▶';
        }
    });

    // 비디오 음소거
    muteButton.addEventListener("click", () => {
        if (video.muted) {           // 음소거 해제 시 음소거 아이콘
            video.muted = false;
            muteButton.textContent = '🔈';
        } else {                    // 음소거 시 소리 아이콘
            video.muted = true;
            muteButton.textContent = '🔊'; 
        }
    });
});