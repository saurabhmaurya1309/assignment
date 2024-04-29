let slideIndex = 0;
const slider = document.querySelector('.slider');

function showSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    console.log("next");
    showSlide(slideIndex += 1);
}

function prevSlide() {
    console.log("prev");
    showSlide(slideIndex -= 1);
}

slider.addEventListener('click', function(event) {
    const sliderWidth = slider.offsetWidth;
    const clickX = event.clientX - slider.getBoundingClientRect().left; // Adjust for slider position
    const slideWidth = document.querySelector('.slides img').offsetWidth;
    if (clickX < sliderWidth / 2 || (slideIndex === 0 && clickX < slideWidth / 2)) {
        prevSlide();
    } else {
        nextSlide();
    }
});

showSlide(slideIndex);
