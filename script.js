// Here we're going to move the active class between the slides. You can do this however you want, but for brevity I'm using JQuery.

// Get all the slides
var slides = $('.slide');

// Move the last slide before the first so the user is able to immediately go backwards
slides.first().before(slides.last());

$('button').on('click', function() {
  // Get all the slides again
  slides = $('.slide');
  // Register button
  var button = $(this);
  // Register active slide
  var activeSlide = $('.active');
  
  // Next function
  if (button.attr('id') == 'next') {
    // Move first slide to the end so the user can keep going forward
    slides.last().after(slides.first());
    // Move active class to the right
    activeSlide.removeClass('active').next('.slide').addClass('active');
  }
  
  // Previous function
  if (button.attr('id') == 'previous') {
    // Move the last slide before the first so the user can keep going backwards
    slides.first().before(slides.last());
    // Move active class to the left
    activeSlide.removeClass('active').prev('.slide').addClass('active');
  }
});
let slideBox = document.querySelectorAll(".slideBox");
let slide = document.querySelector(".slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let indicator = document.querySelectorAll(".indicator div");

let size = slideBox[0].clientWidth;


currentSlide = 0;
showSlides(currentSlide);
indicator[currentSlide].classList.add("active");


next.addEventListener("click", function() {
	showSlides(currentSlide += 1);
});

prev.addEventListener("click", function() {
	showSlides(currentSlide += -1);
});


function showSlides(n) {

  slide.style.transform = 'translateX(' + (-size*currentSlide) + 'px)'; 	

  	console.log(currentSlide);

  	for(let i=0; i<slideBox.length; i++) {
  		indicator[i].className = indicator[i].className.replace("active",  "");
  	}

  	if(currentSlide < 0) {
      currentSlide = slideBox.length - 1;
       slide.style.transform = 'translateX(' + (-size*currentSlide) + 'px)';  

    }

    


    if(currentSlide >= slideBox.length) {
      currentSlide = 0;
      slide.style.transform = 'translateX(' + (size*currentSlide) + 'px)'; 
    }

    indicator[currentSlide].classList.add("active");

}

for(let i=0; i<slideBox.length; i++) {
	indicator[i].addEventListener("click", function() {
		showSlides(currentSlide = i);
		
		
	});
}
