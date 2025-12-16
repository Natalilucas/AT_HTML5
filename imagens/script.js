function stickyNav() {
    const headerBase = document.querySelector("#container-dois");
    const navbar = document.querySelector("#navegacao-nati");
    const scrollValor = window.scrollY;

    const limite = headerBase.offsetTop / 2;

    if (scrollValor > limite) {
        navbar.classList.add("stickyNav");
    } else {
        navbar.classList.remove("stickyNav");
    }
}

window.addEventListener("scroll", stickyNav);
