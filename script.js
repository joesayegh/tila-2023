//////////////////////////////////////
// MOBILE NAV - HAMBURGER MENU
//////////////////////////////////////
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const burgerLines = document.querySelectorAll('[class*="hamburger-"]');

if (menuBtn) {
	// console.log('Mobile Menu detected');

	menuBtn.addEventListener('click', navToggle);

	function navToggle() {
		const expanded = menuBtn.getAttribute('aria-expanded');
		if (expanded === 'false') {
			menuBtn.setAttribute('aria-expanded', 'true');
		} else {
			menuBtn.setAttribute('aria-expanded', 'false');
		}

		menu.classList.toggle('show');

		burgerLines.forEach(lineAnimation);

		function lineAnimation(line) {
			line.classList.toggle('animate');
		}
	}
} else {
	// console.log('No Mobile Menu on this page');
}

//////////////////////////////////////
// SWIPER CAROUSEL
//////////////////////////////////////

// HERO SLIDER

const heroSlider = document.querySelectorAll('.hero-slider__swiper');

const heroSliderPagination = document.querySelectorAll('.swiper-pagination');

var heroSliderPrev = document.querySelectorAll('.swiper-button-prev');
var heroSliderNext = document.querySelectorAll('.swiper-button-next');

for (i = 0; i < heroSlider.length; i++) {
	// ADD CLASS WITH NUMBER TO EACH BIG CARD SLIDER
	heroSlider[i].classList.add('hero-slider__swiper-' + i);
	heroSliderPagination[i].classList.add('swiper-pagination-' + i);
	heroSliderPrev[i].classList.add('swiper-button-prev-' + i);
	heroSliderNext[i].classList.add('swiper-button-next-' + i);

	// INITIATE THE SLIDERS
	var heroSwiper = new Swiper('.hero-slider__swiper-' + i, {
		// SWIPER PROPS
		slidesPerView: 'auto',
		loop: true,
		effect: 'fade',
		keyboard: {
			enabled: true,
		},

		pagination: {
			el: '.swiper-pagination-' + i,
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next-' + i,
			prevEl: '.swiper-button-prev-' + i,
		},
	});
}

// TESTIMONIALS SLIDER

const testimonialsSlider = document.querySelectorAll('.testimonials-slider__swiper');
const testimonialsSliderPagination = document.querySelectorAll('.testimonials-slider__swiper-pagination');

for (i = 0; i < testimonialsSlider.length; i++) {
	// ADD CLASS WITH NUMBER TO EACH BIG CARD SLIDER
	testimonialsSlider[i].classList.add('testimonials-slider__swiper-' + i);
	testimonialsSliderPagination[i].classList.add('swiper-pagination-' + i);

	const progressCircle = document.querySelector('.autoplay-progress svg');
	const progressContent = document.querySelector('.autoplay-progress span');

	// INITIATE THE SLIDERS
	var testimonialsSwiper = new Swiper('.testimonials-slider__swiper-' + i, {
		// SWIPER PROPS
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		slidesPerView: 'auto',
		speed: 500,
		loop: true,
		keyboard: {
			enabled: true,
		},

		pagination: {
			el: '.swiper-pagination-' + i,
			clickable: true,
		},

		on: {
			autoplayTimeLeft(s, time, progress) {
				progressCircle.style.setProperty('--progress', 1 - progress);
				progressContent.textContent = `${Math.ceil(time / 1000)}s`;
			},
		},
	});
}

//////////////////////////////////////
// MODAL
//////////////////////////////////////

// OPEN THE MODAL
function openModal() {
	document.getElementById('teamModal').classList.toggle('show');
	// PREVENT BODY SCROLLING WHEN MODAL IS OPEN
	document.body.classList.add('lock');
}

// CLOSE THE MODAL
function closeModal() {
	document.getElementById('teamModal').classList.remove('show');
	// ALLOW BODY SCROLLING AGAIN WHEN MODAL IS CLOSED
	document.body.classList.remove('lock');
}

var teamModal = document.getElementById('teamModal');

if (teamModal) {
	// console.log('Modal detected');

	var slideIndex = 1;
	showSlides(slideIndex);

	// NEXT/PREVIOUS BUTTONS
	function plusSlides(n) {
		showSlides((slideIndex += n));
	}

	// CURRENT SLIDE
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName('mySlides');
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		slides[slideIndex - 1].style.display = 'block';
	}
} else {
	// console.log('No Modal on this page');
}

//////////////////////////////////////
// ACCORDION
//////////////////////////////////////
// var acc = document.getElementsByClassName('accordion');
// var i;

// for (i = 0; i < acc.length; i++) {
// 	acc[i].onclick = function () {
// 		this.classList.toggle('active');
// 		var panel = this.nextElementSibling;
// 		if (panel.style.maxHeight) {
// 			panel.style.maxHeight = null;
// 		} else {
// 			panel.style.maxHeight = panel.scrollHeight + 'px';
// 		}
// 	};
// }

// YEAR IN THE FOOTER
const date = document.querySelector('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
