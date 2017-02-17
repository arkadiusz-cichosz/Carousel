$(function(){
	const carouselList = $('#carousel ul');
	function moveFirstSlide() {
		let firstItem = carouselList.find('li:first');
		let lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	}

	function changeSlide() {
		carouselList.animate({'marginLeft': -300}, 500, moveFirstSlide);
	}

	setInterval(changeSlide, 3000);
});