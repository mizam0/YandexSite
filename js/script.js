const slider = document.querySelector('.membersSliderBigBlock');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
var prevBtnCircle = document.querySelector('.prev-button-circle');
var nextBtnCircle = document.querySelector('.next-button-circle');
var slide1 = document.querySelector('.membersSlider1');
var slide2 = document.querySelector('.membersSlider2');

prevButton.addEventListener('click', () => {
	slider1();
});

nextButton.addEventListener('click', () => {
	slider2();
});

const slider1 = () => {
	slide2.classList.add('slideNone');
	slide1.classList.remove('slideNone');
	prevButton.setAttribute('disabled', '');
	nextButton.removeAttribute('disabled');
	prevBtnCircle.classList.add('dontActive');
	nextBtnCircle.classList.remove('dontActive');
}

const slider2 = () => {
	slide1.classList.add('slideNone');
	slide2.classList.remove('slideNone');
	nextButton.setAttribute('disabled', '');
	prevButton.removeAttribute('disabled');
	nextBtnCircle.classList.add('dontActive');
	prevBtnCircle.classList.remove('dontActive');
}