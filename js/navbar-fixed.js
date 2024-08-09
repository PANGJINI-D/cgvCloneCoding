// 네비게이션바가 fix된 이벤트 감지를 어떻게 할지??
// 네비게이션 바 영역이 top:0일 때를 감지해야 한다.
// 화면을 스크롤하다가 Y좌표가 네비게이션바가 시작되는 Y좌표에 도달하면
// 이 때 CSS를 제어



// 네비게이션바 전체 영역
const navbar = document.querySelector(".header--navbar-section");
// 네비게이션바 영역이 시작되는 Y좌표값 (192px)
const navbarTopY = navbar.offsetTop; 
// console.log("navbarTopY : "+navbarTopY); 
// console.log(navbar);
const fixedBtn = document.querySelector(".main--fixed-btn-container");

window.addEventListener("scroll", (e) => {
    // console.log("윈도우 스크롤 좌표 : " + window.pageYOffset);
    // console.log("윈도우 스크롤 좌표 : " + window.scrollY);
    
    // 윈도우 스크롤 y좌표가 navTopY와 같거나 커진다면 css 추가
    if(window.scrollY >= navbarTopY) {
        // classList로 네비게이션 섹션에 fixed 클래스 추가
        // <section class="header--navbar-section fixed">로 변경되어 
        // .fixed클래스의 css 속성이 적용된다.
        navbar.classList.add("fixed");
        fixedBtn.classList.remove("hide");  // hide 클래스 제거
        fixedBtn.classList.add("show");
    } else {
        // 네비게이션 섹션에 fixed 클래스 제거
        // 다시 원래대로 <section class="header--navbar-section">이 됨
        navbar.classList.remove("fixed");
        fixedBtn.classList.remove("show");
        
        // 애니메이션 없이 버튼을 바로 숨기기 위해 hide 클래스 추가
        fixedBtn.classList.add("hide");
    }
}); 