const lazyload = () => {
    let lazyloadTimeout = null;
    const lazyloadImages = document.querySelectorAll(".lazy");
    if (lazyloadTimeout) {
        clearTimeout(lazyloadTimeout);
    }
    lazyloadTimeout = setTimeout(() => {
        let scrollTop = window.pageYOffset;

        lazyloadImages.forEach((img) => {
            if (img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
        if (lazyloadImages.length == 0) {
            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
        }
    });
};

document.addEventListener("DOMContentLoaded", lazyload);