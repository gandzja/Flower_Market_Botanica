const slides = document.querySelectorAll('.slide')
var arrowPrev = document.querySelectorAll('.arrow__prev')
var arrowNext = document.querySelectorAll('.arrow__next')


for (const slide of slides) {
	slide.addEventListener('click', () => {
		clearActiveClasses()
		slide.classList.add('active')
	})
}
function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}
