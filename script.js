logo.onclick = function () {
    location.href = "#";
}

menuButton.onclick = function () {
    menuList.classList.toggle("active");
    if (menuList.classList.contains ("active")) {
        document.querySelector("#menuButton").src = "/images/close.svg";
        document.querySelector("#hero").style.display = "none"
    } else {
        document.querySelector("#menuButton").src = "/images/toggle-menu.svg";
        document.querySelector("#hero").style.display = "inline"
    }
}

