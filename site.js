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
// stars
var NUMBER_OF_STARS = 500;

var addPulse = function( element ){
  var pulseTime = Math.random() * 10000;
  setTimeout( function(  ){
    element.className += ' pulse';
  }, pulseTime );
}


for( var jess = 0; jess < NUMBER_OF_STARS; jess++ ) {
    var aStar = document.createElement('div');
		aStar.className='star';
  
  	var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
  	var x = Math.random( ) * windowWidth;
  	aStar.style.left = x + 'px';
  	document.body.appendChild( aStar );
  
  	var y = Math.random( ) * windowHeight;
  	aStar.style.top = y + 'px';
  
    addPulse( aStar );
}
// endstars