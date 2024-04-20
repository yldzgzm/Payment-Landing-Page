function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.left === "0px") {
        navbar.style.left = "-100%";
    } else {
        navbar.style.left = "0px";
    }
}
