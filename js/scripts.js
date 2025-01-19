/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/*

// Slideshow scripts

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    document.querySelector('.slideshow').style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

showSlide(0); // Initialize

//END SLIDES
//Thumbnails nav for slides

// Set the active slide and corresponding thumbnail
function currentSlide(index) {
    // Update slideshow
    const thumbnail = document.querySelectorAll('.slideshow .slide');
    thumbnail.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === index);
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    currentSlide(0); // Show the first slide and activate its thumbnail
});


//END THUMBNAILS

*/

//Testing

document.addEventListener('DOMContentLoaded', () => {
    const thumbnailContainer = document.querySelector('.thumbnail-navigation-container');
    console.log('Initial scroll position:', thumbnailContainer.scrollLeft);
    thumbnailContainer.scrollLeft = 0; // Reset if necessary
});

let currentSlideIndex = 0;

// Function to display the current slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slideshow .slide');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Loop around if index goes out of bounds
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;

    // Hide all slides and remove active class from thumbnails
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === currentSlideIndex);
    });
}

// Navigation via thumbnails
function currentSlide(index) {
    showSlide(index);
}

// Navigation via arrow buttons
function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Initialize the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0); // Show the first slide
});
