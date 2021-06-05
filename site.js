let lightMode = localStorage.getItem('lightMode');
const modeToggle = document.querySelector('#mode-toggle');

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');
navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});
/* nav */


/* modeToggle */


/* Hello, World */
var index = 0;
(function type(){
	const text = 'Hello, World!'
	console.log(index);
	document.querySelector('.typing').textContent = text.slice(0, ++index);

	setTimeout(type, 350);
	if (index === text.length) {
		--index;
	}
}());
/* Hello, World */

/* stars */
var NUMBER_OF_STARS = 200;

var addPulse = function( element ){
	var pulseTime = Math.random() * 10000;
	setTimeout( function(){
		element.className += ' pulse';
	}, pulseTime );
}
function removeStars(){
	document.querySelectorAll('.star').forEach(function(a){
		a.remove()
	})
}
const createStars = () => {
	if (lightMode === "enabled") {
		return;
	}
	removeStars();
	for( var jess = 0; jess < NUMBER_OF_STARS; jess++ ) {
		var aStar = document.createElement('div');
		aStar.className='star';

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		// var x = Math.random( ) * windowWidth;
		var x = Math.random() * ((windowWidth - 20) - 20) + 20;
		// x = x - 30;
		aStar.style.left = x + 'px';
		document.getElementById('intro').appendChild( aStar );

		// var y = Math.random( ) * windowHeight;
		var y = Math.random() * ((windowHeight - 20) - 20) + 20;
		aStar.style.top = y + 'px';

		addPulse( aStar );
	}
}
window.onload = createStars;
window.addEventListener('resize', createStars);
/* endstars */

/* modeToggle */

//check which mode(Light/Dark) mode is enabled.

const enableLightMode = () => {
	//1. Add all LightMode classes.
	//2. Remove all the darkMode classes.
	document.body.classList.add('lightMode');
	document.getElementById('moon-sun').classList.add('sun');
	document.getElementById('moon-sun_blur').classList.add('sun_blur');
	document.getElementById('moon-sun_blur').classList.add('sun_blur');
	//3. Add the preference to the LocalStorage.
	localStorage.setItem("lightMode", "enabled");
	lightMode = localStorage.getItem("lightMode");
	removeStars();
};

const disableLightMode = () => {
	document.body.classList.remove('lightMode');
	document.getElementById('moon-sun').classList.remove('sun');
	document.getElementById('moon-sun_blur').classList.remove('sun_blur');
	localStorage.setItem('lightMode', null);
	lightMode = localStorage.getItem("lightMode");
	createStars();
};

if ( lightMode === 'enabled') {
	enableLightMode();
}

modeToggle.addEventListener('click', () => {
	if (lightMode !== "enabled") {
		enableLightMode();
	}
	else {
		disableLightMode();
	}
});