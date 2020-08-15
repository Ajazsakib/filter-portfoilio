class Slides {

	next(activeSlide) {
			
			activeSlide.nextElementSibling.classList.add("active");
			activeSlide.classList.remove("active"); 
			slideContainer.insertBefore(slides[0], slideContainer.lastElementChild.nextElementSibling);
		}

	prev(activeSlide) {
			activeSlide.previousElementSibling.classList.add("active");
			activeSlide.classList.remove("active");
			slideContainer.insertBefore(slideContainer.lastElementChild, slideContainer.children[0]);
	}	

}

let button = document.querySelectorAll("button");
let slides = document.getElementsByClassName("slides");
let slideContainer = document.querySelector(".slideContainer");
let lastImage = slides[slides.length - 1];

slideContainer.insertBefore(lastImage, slideContainer.childNodes[0]);

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let slider = new Slides();

for(let i=0; i<button.length; i++) {
	button[i].addEventListener("click", function() {
		let activeSlide = document.querySelector(".slides.active");	

	if(this.id == "next") {
		slider.next(activeSlide);
	}
	if(this.id == "prev") {
		slider.prev(activeSlide);
	}
});
}
