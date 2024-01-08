var scroll = document.getElementById('scrollTop');
var nav = document.getElementById('nav');

window.onscroll = function () {
	nav.classList.toggle('nav-bg', scrollY >10);
	scroll.classList.toggle('scrollNow', scrollY >100);
};

var navbtn = document.getElementById('navbtn');
var newNav = document.getElementById('navItem');

navbtn.onclick = () => {
	newNav.classList.toggle("navItem-show");
}