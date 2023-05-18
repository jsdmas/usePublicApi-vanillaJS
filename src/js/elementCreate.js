import paintDescription from "./descriptionBox";
import paintMap from "./paintMap";

// index의 container div
const container = document.querySelector(`#container`);
const description = document.querySelector('#description');

/**
 * @description 요소들을 생성합니다
 * @param {Object} 행사데이터
 */
const elementcreate = (item) => {
    // 목록 div 생성
    const div = document.createElement("div");
    // div에 box 클래스 추가.
    div.classList.add("box");

    const img = document.createElement("img");
    img.classList.add("box__img");
    // 행사정보 이미지 추가
    img.setAttribute("src", item.IMGURL);
    div.appendChild(img);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("box__title");
    const h3 = document.createElement("h3");
    // 서비스명
    h3.innerHTML = item.SVCNM;
    const span = document.createElement("span");
    // 소분류명
    span.innerHTML = item.MINCLASSNM;

    titleDiv.appendChild(h3);
    titleDiv.appendChild(span);
    div.appendChild(titleDiv);

    // 결제 방법
    const Payment = document.createElement('span');
    Payment.innerHTML = item.PAYATNM;
    titleDiv.appendChild(Payment);

    // 서비스 상태
    const service = document.createElement('span');
    service.innerHTML = item.SVCSTATNM;
    titleDiv.appendChild(service);

    // 지역명
    const area = document.createElement('span');
    area.innerHTML = item.AREANM;
    titleDiv.appendChild(area);

    // container에 div추가
    container.appendChild(div);

    // div클릭시 html에 있던 숨겨진 상자 안에 나오게하기
    div.addEventListener("click", () => {
        paintDescription(item);
        paintMap(item);
    });

    document.querySelector('#delete').addEventListener('click', () => {
        description.classList.add('hidden');
        container.classList.remove("move");
        container.classList.add("container");
    })
};

export default elementcreate;