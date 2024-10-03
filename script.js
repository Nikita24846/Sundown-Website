const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    });

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        });
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

swiperAnimation()
page4Animation()

const headings = document.querySelectorAll('.loader h1');
let currentHeading = 0;

function showHeading() {
    if (currentHeading < headings.length) {
        headings[currentHeading].style.opacity = 1;
        setTimeout(() => {
            headings[currentHeading].classList.add('fade-out');
            setTimeout(() => {
                headings[currentHeading].style.opacity = 0;
                currentHeading++;
                showHeading();
            }, 500);
        }, 1000);
    } else {
        document.querySelector('.loader').style.display = 'none';
    }
}

showHeading();




