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