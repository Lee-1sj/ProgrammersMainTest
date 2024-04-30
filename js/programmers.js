function showLogin() {
    window.open("login.html", "로그인", "width=550, height=400, top=100, left=100");
}

function showRegister() {
    window.open("member-register.html", "회원가입", "width=1500, height=3000, top=100, left=100");
}

function displayMenu(id) {
    document.getElementById(id + "Menu").style.display = "flex";
}

function hiddenMenu(id) {
    document.getElementById(id).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const Header = document.querySelector("header");
    Header.addEventListener("mouseover", function () {
        Header.style.backgroundColor = "white";
        Header.style.height = "220px";
        Header.style.transition = "height 0.3s ease";
    });
    Header.addEventListener("mouseout", function () {
        Header.style.backgroundColor = "white";
        Header.style.height = "60px";
        Header.style.transition = "height 0.3s ease";
    });
});

function call_js() {
    let slideshow = document.querySelector(".slideshow");
    let slideshow_slides = document.querySelector(".slideshow_slides");

    let aSlidesArray = document.querySelectorAll(".slideshow_slides a");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let indicators = document.querySelectorAll(".indicator a");

    let currentIndex = 0;
    let timer = 3000;
    let slideCount = aSlidesArray.length;

    for (let i = 0; i < slideCount; i++) {
        let newLeft = `${i * 100}%`;
        aSlidesArray[i].style.left = newLeft;
    }

    function gotoSlide(index) {
        currentIndex = index;
        let newLeft = index * -100 + '%';
        slideshow_slides.style.left = newLeft;

        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove("active")
        }
        indicators[currentIndex].classList.add("active");
    }
    gotoSlide(0);

    function startTimer() {
        timer = setInterval(function () {
            currentIndex += 1;
            let index = currentIndex % slideCount;
            gotoSlide(index);
        }, 3000);
    }
    startTimer();

    slideshow_slides.addEventListener("mouseenter", function () {
        clearInterval(timer);
    });

    slideshow_slides.addEventListener("mouseleave", function () {
        startTimer();
    });

    prev.addEventListener("mouseenter", function () {
        clearInterval(timer);
    });

    next.addEventListener("mouseenter", function () {
        clearInterval(timer);
    });

    prev.addEventListener("click", function (e) {
        e.preventDefault() // a tag 기본기능 막음
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = slideCount - 1;
        }
        gotoSlide(currentIndex);
    });

    next.addEventListener("click", function (e) {
        e.preventDefault() // a tag 기본기능 막음
        currentIndex += 1;
        if (currentIndex > slideCount - 1) {
            currentIndex = 0;
        }
        gotoSlide(currentIndex);
    });

    indicators.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            clearInterval(timer);
        });
    });
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", (e) => {
            e.preventDefault();
            gotoSlide(i);
        });
    }
} 