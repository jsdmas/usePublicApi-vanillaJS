import elementcreate from "./elementCreate";

const FETCH_BASE_URL = "http://openapi.seoul.go.kr:8088";
const API_KEY = process.env.PUBLIC_KEY;
const API_DATA_TYPE = process.env.PUBLIC_DATATYPE;
const FETCH_TYPE_URL = "ListPublicReservationCulture";

/**
 * @description 공공데이터 포탈에서 데이터를 가져옵니다.
 * @param {number} currentPage 
 * @param {number} lastPage 
 * @returns [totalCount, currentPage, lastPage]
 */
export const fetchData = async (currentPage = 1, lastPage = 5) => {
    let data = null;
    let totalCount = 0;
    try {
        const { ListPublicReservationCulture: { list_total_count, row } } = await (await fetch(`${FETCH_BASE_URL}/${API_KEY}/${API_DATA_TYPE}/${FETCH_TYPE_URL}/${currentPage}/${lastPage}`)).json();
        totalCount = list_total_count;
        data = row;
    } catch (error) {
        console.error(error);
        return alert("데이터를 불러오지 못했습니다!");
    }
    data.forEach(item => elementcreate(item, currentPage));
    return [totalCount, currentPage, lastPage];
};