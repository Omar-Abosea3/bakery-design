var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("bg-transparent");
    } 
    else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("nav-colored");
    }
};