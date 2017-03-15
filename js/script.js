$(function(){
	const carouselList = $('#carousel ul');
	const leftButton = $('.left-button');
	const rightButton = $('.right-button');

	leftButton.click(changeSlideLeft);

	rightButton.click(changeSlideRight);

	function moveFirstSlide() {
		let firstItem = carouselList.find('li:first');
		let lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: -300});
	}

	function moveLastSlide() {
		let firstItem = carouselList.find('li:first');
		let lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -300});
	}

	function changeSlideLeft() {
		carouselList.animate({'marginLeft': -600}, 500, moveFirstSlide);
	}

	function changeSlideRight() {
		carouselList.animate({'marginLeft': 0}, 500, moveLastSlide);
	}

	setInterval(changeSlideLeft, 5000); // or changeSlideRight
});