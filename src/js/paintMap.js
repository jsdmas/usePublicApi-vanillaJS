/**
 * @description kakaoMap을 활용해 행사 주최하는 장소 지도를 그려줍니다.
 * @param {Object} 행사데이터
 */
const paintMap = (item) => {
    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
    var markers = [];

    function panTo(x, y) {
        // 이동할 위도 경도 위치를 생성합니다 
        var moveLatLon = new kakao.maps.LatLng(x, y);

        // 지도 중심을 부드럽게 이동시킵니다
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
        map.panTo(moveLatLon);
    }

    // 지도 레이아웃 초기화
    map.relayout();
    // 지도 이동
    panTo(item.Y, item.X);
    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(item.Y, item.X);
    //이전 마커를 지웁니다
    markers.forEach((item) => {
        item.setMap(null);
    });
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
};

export default paintMap;

