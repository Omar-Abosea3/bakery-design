var myNav = document.getElementById('mynav');
var prevScrollpos = window.pageYOffset;
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("bg-transparent");
    } 
    else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("nav-colored");
    }
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar1").style.top = "0";
    } else {
        document.querySelector(".navbar1").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
};
