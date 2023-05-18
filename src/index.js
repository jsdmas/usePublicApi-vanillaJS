import "./scss/style.scss";
import "./img/seoul.jpg";
import { fetchData } from "./js/featchData";
import throttle from "./js/throttle";

(async () => {
    const addPageNum = 5;
    let [totalCount, currentPage, lastPage] = await fetchData();
    const fetchDataThrottled = throttle(() => fetchData(currentPage, lastPage), 500);
    window.addEventListener(`scroll`, () => {

        if (lastPage > totalCount) return;
        const scrollTop = window.scrollY;
        const windowHeight = window.screen.availHeight;
        const documentHeight = document.body.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight) {
            currentPage = currentPage + addPageNum;
            lastPage = lastPage + addPageNum;
            fetchDataThrottled();
        }
    });

})();
