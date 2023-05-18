import "./scss/style.scss";
import "./img/seoul.jpg";
import { fetchData } from "./js/featchData";
import throttle from "./js/throttle";

(async () => {
    let [totalCount, currentPage, lastPage] = await fetchData();
    const fetchDataThrottled = throttle(() => fetchData(currentPage, lastPage), 300);
    window.addEventListener(`scroll`, () => {

        if (lastPage > totalCount) return;
        const scrollTop = window.scrollY;
        const windowHeight = window.screen.availHeight;
        const documentHeight = document.body.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight) {
            currentPage = currentPage + 5;
            lastPage = lastPage + 5;
            fetchDataThrottled();
        }
    });

})();
