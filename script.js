filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    // w3RemoveClass(x[i], "show");
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");
  }
}

// Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}





//create modal and slider

let openImage = document.getElementsByClassName("openImage");

let myModal = document.getElementById("myModal");

let close = document.getElementById("close");

let modalImage = document.getElementById("modalImage");

let currentIndex;


for(let i=0; i<openImage.length; i++) {
  openImage[i].addEventListener("click", function() {
    myModal.style.display = "block";
    modalImage.src = this.src;
    currentIndex = i;
    
  });
}

close.addEventListener("click", function() {
  myModal.style.display = "none";
});

let prev = document.getElementById("prev");

let next = document.getElementById("next");



next.addEventListener("click", function() {

  modalImage.src = openImage[currentIndex + 1].src;
  currentIndex++;
  if(currentIndex >= openImage.length - 1) {
    currentIndex = -1;
  }

});

prev.addEventListener("click", function() {
  modalImage.src = openImage[currentIndex - 1].src;
  currentIndex--;
  if(currentIndex < 1) {
    currentIndex = openImage.length;
  }
});

// function slide(n) {
//   for(let i=0; i<openImage.length; i++) {

//   }

  
  
//   modalImage.src = openImage[currentIndex - 1].src;
// }