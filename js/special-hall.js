// 맨 처음 li 태그에 초기 border css 설정
// li 태그에 마우스 hover가 발생할 때
// ① target에 border css 적용
// ② img 태그에 이미지 변경

// 자바스크립트 마우스 이벤트
// mouseover, mouseout는 자식 요소에 접근해도 동작한다.
// mouseenter, mouseleave는 자식 요소에는 동작하지 않는다.

// 태그 가져오기
const img = document.querySelector(".special-hall-img-wrap img");
const hallList = document.querySelectorAll(".special-hall-list");
// console.log(hallList);

// list 태그 초기 border 설정
with(hallList[0].style) {
    border = "1px solid black";
    borderRadius = "10px";
}

// 리스트 각각에 이벤트 걸어주기
hallList.forEach((hall) => {
    // 마우스 들어오면 border, img 변경
    hall.addEventListener("mouseenter", (e) => {
        e.currentTarget.style.border = "1px solid black";
        e.currentTarget.style.borderRadius = "10px";
        
        // list태그 id로 구분하여 img 변경
        switch(e.currentTarget.id) {
            case "special-hall-suite":
                img.src = "imgs/special1.png";
                break;
            case "special-hall-living":
                img.src = "imgs/special2.png"
                break;
            case "special-hall-4dx":
                img.src = "imgs/special3.png";
                break;
            case "special-hall-chef":
                img.src = "imgs/special4.png"
                break;
        }
    });

    // 마우스 나가면 원래대로
    hall.addEventListener("mouseleave", (e) => {
        // e.currentTarget.style.borderLeft = "none";
        // e.currentTarget.style.borderRight = "none";
        // e.currentTarget.style.borderTop = "1px solid #e2e2e2";
        // e.currentTarget.style.borderBottom = "none";
        with(e.currentTarget.style) {
            borderLeft = "none";
            borderRight = "none";
            borderTop = "1px solid #e2e2e2";
            borderBottom = "none";
            borderRadius = "0";
        }

        //with문 자바스크립트에서 권장하지 않음
        //스타일을 객체로 정의하여 Object.assign으로 적용하는 방법이 더 안전하고 직관적
        //hall.addEventListener("mouseleave", (e) => {
            // Object.assign(e.currentTarget.style, {
            //     borderLeft: "none",
            //     borderRight: "none",
            //     borderTop: "1px solid #e2e2e2",
            //     borderBottom: "none"
            // });

    });
});