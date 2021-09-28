function Change(className) {
    document.getElementById("active").setAttribute("id", "");
    document.getElementsByClassName(className)[0].setAttribute("id", "active");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}