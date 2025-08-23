let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slide every 4 seconds
  setTimeout(showSlides, 4000);
}
