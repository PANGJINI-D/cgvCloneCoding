// document.addEventListener("DOMContentLoaded", () => {
/*** 처음에 작성한 코드 ***
 * 문제
 * 스크립트 코드를 main.html에 태그로 직접 삽입 시 정상 동작이 되지만, 
 * index.html에서 ajax 코드로 로드할 경우 작동하지 않는 문제 발생 (banner.js는 작동하지만 video.js만 작동안함)
 * 
 * 원인
 * video.js가 DOMContentLoaded 이벤트에 의존하고 있을 때
 * 이미 DOMContentLoaded 이벤트가 발생한 후에 스크립트가 로드되면 이벤트가 등록되지 않을 수도 있음.
 *
 * 해결
 * DOMContentLoaded 이벤트를 기다리는 대신, 로직을 initializeVideo 함수로 감싸고 함수 정의 후 바로 실행하도록 변경
 * 스크립트가 로드되면 바로 initializeVideo 함수가 호출되어 비디오를 제어할 수 있다.
 * 
 * 
 *** DOMContentLoaded ?
 * DOMContentLoaded 이벤트는 웹 페이지가 로드될 때 발생하는 이벤트 중 하나이다.
 * html 문서의 DOM트리가 완전히 생성되고, 초기 html 문서의 모든 요소가 준비되었을 때 DOMContentLoaded 이벤트가 발생한다.
 * 외부 리소스(이미지, 스타일시트)가 모두 로드되기 전에 발생한다. 따라서 빠르게 DOM에 접근하여 조작할 수 있다.
 * 
 * 좀 헷갈림😥
 * 1️⃣banner.js는 문제없이 실행됐고 video.js만 실행되지 않았다.
 * banner.js는 함수로 감싸는 구조가 아니라 바로 스크립트 코드가 작성되었고,
 * video.js는 이벤트리스너 함수로 감싸는 구조였다.
 * 따라서 banner.js는 DOMContentLoaded의 영향을 받지 않는다. 실제로 banner.js를 DOMContentLoaded로 감싸니 banner 스크립트도 동작하지 않았다.
 * 
 * 2️⃣DOMContentLoaded가 html의 돔트리가 생성된 후에 스크립트 코드의 실행을 보장한다고 하는데, 왜 위의 코드는 동작하지 않았을까?
 * DOMContentLoaded 이벤트는 문서가 처음 로드될 때 한 번만 발생한다고 한다.
 * index.html을 로드하는 과정에서 이미 DOMContentLoaded가 로드되었을 것으로 예상한다.
 * 따라서 main.html이 동적으로 추가된 후에는 DOMContentLoaded 이벤트를 다시 사용할 수 없다.
 * 
 * ajax로 main.html을 로드하고 나서 video.js를 비동기로 불러온다.
 * index.html을 로드하며 이미 DOMContentLoaded 이벤트가 발생한 상태일 수 있다.
 * DOMContentLoaded 이벤트 리스너가 등록되지 전에 이미 해당 이벤트가 발생한 경우, 이벤트 핸들러가 호출되지 않는다.
 *
*/


const initializeVideo = () => {
    const video = document.querySelector(".main--video-container video");
    const playButton = document.getElementById("video-pause-btn");
    const muteButton = document.getElementById("video-mute-btn");

    if (video && playButton && muteButton) {
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
    } else {
        console.error("Video controls not found or failed to initialize.");
    }
}

// 초기화 함수 호출
initializeVideo();
