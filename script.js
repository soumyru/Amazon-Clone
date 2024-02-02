// First carousel code
let slideIndex = 1;
showSlides(slideIndex);

// next/prev controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Second carousel code (long grid)
const carouselWrapper = document.getElementById("carousel-wrapper");
const totalItems = document.querySelectorAll(".carousel-item").length;
let currentIndex = 0;
const itemsPerFrame = 5;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function scrollCarousel(direction) {
    const newIndex = currentIndex + direction * itemsPerFrame;
    currentIndex = Math.min(Math.max(newIndex, 0), totalItems - itemsPerFrame);
    updateCarousel();
}
function updateCarousel() {
    const translateValue = -currentIndex * (100 / itemsPerFrame) + '%';
    carouselWrapper.style.transform = 'translateX(' + translateValue + ')';
}

document.addEventListener("DOMContentLoaded",function(){
  
  // location onclick()
  document.getElementById('location').addEventListener('click',openLocationBox)
function openLocationBox(){
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('location-box').style.display="block";
}

window.addEventListener('click',function(e){
  var locationBox=document.getElementById('location-box');
  var overlay = document.getElementById('overlay');
        if (e.target === overlay || e.target === locationBox) {
            locationBox.style.display = 'none';
            overlay.style.display = 'none';
        }
})

//search hover
document.getElementById('search').addEventListener('click',function(e){
document.getElementById('overlay').style.display="block";
document.getElementById('search-bar').style.border="2px solid orange";
});

})
