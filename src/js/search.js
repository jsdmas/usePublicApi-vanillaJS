async function search() {
    let data = null;
    try {
        // 설정한 page의 배열 가져오기
        const { ListPublicReservationCulture: { row } } = await (await fetch(`http://openapi.seoul.go.kr:8088/${KEY}/${dataType}/ListPublicReservationCulture/${firstPage}/${endPage}`)).json();
        data = row;
    } catch (error) {
        return alert("데이터를 불러오지 못했습니다!");
    }
    data.forEach(v => elementcreate(v));
}
