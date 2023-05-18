const poster = document.querySelector(`.description__poster`);
const infoTitle = document.querySelector(`.description__info__data>h3`);
const span1 = document.querySelector(`.description__info__data :nth-child(2)`);
const span2 = document.querySelector(`.description__info__data :nth-child(3)`);
const span3 = document.querySelector(`.description__info__data :nth-child(4)`);
const span4 = document.querySelector(`.description__info__data :nth-child(5)`);
const linkBtn = document.querySelector(`#linkBtn`);
const moreInfo = document.querySelector(`.description__moreinfo>p`);
const description = document.querySelector('#description');

const paintDescription = (item) => {
    // let growless = container.classList.contains("container");
    let Existence = description.classList.contains("hidden");
    // console.log(Existence);
    if (Existence === true) {
        description.classList.remove("hidden");
        container.classList.add("move");
        container.classList.remove("container");
    };
    // 이미지 변화
    poster.setAttribute("src", item.IMGURL);
    // title
    infoTitle.innerHTML = item.SVCNM;

    // SVCOPNBGNDT : 서비스 시작일시
    // SVCOPNENDDT : 서비스 종료일시
    // span1 : 날짜 -> string 변환후 substring으로 날짜만 표시.
    span1.innerHTML = `${String(item.SVCOPNBGNDT).substring(0, 10)} ~ ${String(item.SVCOPNENDDT).substring(0, 10)}`;

    // span2 : 결재방법
    span2.innerHTML = item.PAYATNM;

    // span3 : 서비스 상태
    span3.innerHTML = item.SVCSTATNM;

    // span4 : 지역명
    span4.innerHTML = item.AREANM;

    // span5 : 예약링크
    linkBtn.setAttribute("href", item.SVCURL);

    // moreInfo : 상세내용
    const DTLCONTNum = item.DTLCONT.indexOf("3.");
    const deleteDT = item.DTLCONT.slice(0, DTLCONTNum);
    const text = item.DTLCONT.replace(deleteDT, "").replace("3.", ">");

    // img 태그 제거하는 정규표현식
    var myRegExp1 = /<IMG(.*?)>/gi;
    const img_remove = text.replace(myRegExp1, "");
    // moreInfo.innerHTML = newtext;
    moreInfo.innerHTML = img_remove;
}

export default paintDescription;