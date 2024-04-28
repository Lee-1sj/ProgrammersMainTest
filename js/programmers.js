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