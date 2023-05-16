
search();

(async () => {
    let totalCount = null;
    try {
        const { ListPublicReservationCulture: { list_total_count } } = await (await fetch(`http://openapi.seoul.go.kr:8088/${KEY}/${dataType}/ListPublicReservationCulture/${firstPage}/${endPage}`)).json();
        totalCount = list_total_count;
    } catch (error) {
        return alert("데이터를 불러올 수 없습니다!");
    }

    // window scroll event
    window.addEventListener(`scroll`, e => {
        // 더이상 불러올 데이터가 없다면 처리 중단
        // endPage 의 길이가 list_total_count값보다 크다면 실행 중단
        if (endPage > totalCount) return;
        // 스크롤바의 Y좌표
        const scrollTop = window.scrollY;
        // 웹 브라우저의 창 높이
        const windowHeight = window.screen.availHeight;
        // HTML 문서의 높이
        const documentHeight = document.body.scrollHeight;
        // 스크롤바의 반동 효과를 고려해서 scrollTop + windowHeight가 실제 화면 크기보다 커 질 수도 있다.
        if (scrollTop + windowHeight >= documentHeight) {
            // 10개의 행사정보 불러오기 (배열길이 설정)
            firstPage += 5;
            endPage += 5;
            search();
        }
    });
})();