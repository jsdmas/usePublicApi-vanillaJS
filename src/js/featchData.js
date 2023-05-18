import elementcreate from "./elementCreate";

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
        const { ListPublicReservationCulture: { list_total_count, row } } = await (await fetch(`http://openapi.seoul.go.kr:8088/${process.env.PUBLIC_KEY}/${process.env.PUBLIC_DATATYPE}/ListPublicReservationCulture/${currentPage}/${lastPage}`)).json();
        totalCount = list_total_count;
        data = row;
    } catch (error) {
        console.error(error);
        return alert("데이터를 불러오지 못했습니다!");
    }
    data.forEach(item => elementcreate(item));
    return [totalCount, currentPage, lastPage];
};

