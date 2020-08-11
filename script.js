let slideBox = document.querySelectorAll(".slideBox");
let slide = document.querySelector(".slide");
console.log(slideBox.length);
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let indicator = document.querySelectorAll(".indicator div");

let size = slideBox[0].clientWidth;
console.log(size);

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

  	if(slideBox[currentSlide].classList.contains("last")) {
  		
  	}

  	for(let i=0; i<slideBox.length; i++) {
  		indicator[i].className = indicator[i].className.replace("active",  "");
  	}

  	indicator[currentSlide].classList.add("active");

}

for(let i=0; i<slideBox.length; i++) {
	indicator[i].addEventListener("click", function() {
		showSlides(currentSlide = i);
		
		
	});
}