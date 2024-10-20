let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = -currentIndex * 1220; // 1220 is the width of each slide
    slides.style.transform = `translateX(${newTransform}px)`;
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(() => {
        changeSlide(1);
    }, 30000); // Change slide every 30 seconds
});





let currentInde = 0;
const itemsToShow = 4;
const totalItems = document.querySelectorAll('.shoe-grid img').length;
const grid = document.querySelector('.shoe-grid');

document.getElementById('nextButton').addEventListener('click', () => {
    currentInde += itemsToShow;
    if (currentInde >= totalItems) {
        currentInde = 0; // Reset to the start if we exceed the total items
    }
    updateGrid();
});

document.getElementById('prevButton').addEventListener('click', () => {
    currentInde -= itemsToShow;
    if (currentInde < 0) {
        currentInde = totalItems - itemsToShow; // Move to the end if we go below 0
    }
    updateGrid();
});

function updateGrid() {
    grid.style.transform = `translateX(-${currentInde * 294}px)`;
}
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const itemsToShow = 5;
    const itemWidth = 240;
    const totalItems = document.querySelectorAll('.slider-item').length;
    const sliderTrack = document.querySelector('.slider-track');

    document.getElementById('slider-next').addEventListener('click', () => {
        currentIndex += itemsToShow;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        updateSlider();
    });

    document.getElementById('slider-prev').addEventListener('click', () => {
        currentIndex -= itemsToShow;
        if (currentIndex < 0) {
            currentIndex = totalItems - itemsToShow; 
        }
        updateSlider();
    });

    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const slideWidth = slides[0].clientWidth; // Width of a single slide
    const slidesToShow = 3; // Number of slides to show at a time
    let currentIndex = 0;

    // Set width of slider dynamically based on number of slides
    slider.style.width = `${slideWidth * slides.length}px`;

    // Function to update slider position
    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Next button click event
    nextButton.addEventListener('click', () => {
        const totalSlides = slides.length;
        currentIndex = Math.min(currentIndex + slidesToShow, totalSlides - slidesToShow);
        updateSlider();
    });

    // Previous button click event
    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - slidesToShow, 0);
        updateSlider();
    });
});
