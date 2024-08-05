// 화살표
const arrows = document.querySelectorAll(".arrow-left, .arrow-right");
// 슬라이드
const slides = document.querySelectorAll('.movie-chart-slide-container');
const slideLen = slides.length;
let curSlide = 0;

// 화살표 클릭이벤트
arrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        // 현재 슬라이드 인덱스 계산하기
        if (e.target.classList.contains("arrow-left")) {        // 왼쪽 화살표 클릭시 curSlide값
            curSlide = Math.max(curSlide - 1, 0);               // 현재 슬라이드 -1, 최소값 0으로 제한
        } else if (e.target.classList.contains("arrow-right")) {    // 오른쪽 화살표 클릭 시 curSlide값
            curSlide = Math.min(curSlide + 1, slideLen - 1);        // 현재 슬라이드 +1, 최대값 슬라이드길이-1
        }

        // 슬라이드 이동
        slides.forEach((slide) => {
            // 이동 애니메이션
            slide.style.transition = `transform 0.5s`;
            // x축 방향으로 -1000픽셀 * 누적씩 밀어야함
            slide.style.transform = `translateX(${-1000 * curSlide}px)`;
        });

        // 화살표 display 제어
        // 현재 슬라이드 0이면 왼쪽 화살표 none
        // 마지막 슬라이드-1이면 오른쪽 화살표 none
        arrows[0].style.display = curSlide === 0 ? "none" : "block";
        arrows[1].style.display = curSlide === slideLen-1 ? "none" : "block";
    });
});

// 처음에는 왼쪽 화살표 숨김
arrows[0].style.display = "none";