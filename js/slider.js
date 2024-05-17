const slider = document.querySelector(".slider__inner");
const prevButton = document.querySelector(".slider__nav_prev");
const nextButton = document.querySelector(".slider__nav_next");
const slides = Array.from(slider.querySelectorAll(".slider__image"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.opacity = "1";
    } else {
      slide.style.opacity = "0";
    }
  });
}

updateSlider();

setInterval(function () {
  showNextSlide();
}, 3000);
