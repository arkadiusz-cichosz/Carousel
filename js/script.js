const carouselList = $('#carousel ul');
const carouselItems = $('#carousel ul li');
const carouselItemsLength = carouselItems.length;
const leftButton = $('.left-button');
const rightButton = $('.right-button');

leftButton.click(changeSlideLeft);

rightButton.click(changeSlideRight);

function findFirstItem() {
	const firstItem = carouselList.find('li:first');
	return firstItem;
}	

function findLastItem() {
	const lastItem = carouselList.find('li:last');
	return lastItem;
}

function checkMyID() {
	const myID = findFirstItem().next().attr('id');
	console.log(myID);
	return myID;	
}

function setActive() {
	$('.circle:first-of-type').addClass('isActive').attr('name', 'isFirst');
	$('.circle:last-of-type').attr('name', 'isLast');
}

function changeActiveLeft() {
	let activElement = $('.isActive');
	if (activElement.attr('name') !== 'isLast') {
		activElement.removeClass('isActive').next().addClass('isActive');	
	} else {
		activElement.removeClass('isActive');
		$('.circle:first-of-type').addClass('isActive');
	}
}

function changeActiveRight() {
	let activElement = $('.isActive');
	if (activElement.attr('name') !== 'isFirst') {
		activElement.removeClass('isActive').prev().addClass('isActive');	
	} else {
		activElement.removeClass('isActive');
		$('.circle:last-of-type').addClass('isActive');
	}
}

function moveFirstSlide() {
	findLastItem().after(findFirstItem());
	carouselList.css({marginLeft: -300});
}

function moveLastSlide() {
	findFirstItem().before(findLastItem());
	carouselList.css({marginLeft: -300});
}

function changeSlideLeft() {
	carouselList.animate({'marginLeft': -600}, 500, moveFirstSlide);
	changeActiveLeft();
}

function changeSlideRight() {
	carouselList.animate({'marginLeft': 0}, 500, moveLastSlide);
	changeActiveRight();
}

const classOfShape = "circle";

for (let i = 0; i < carouselItemsLength; i++) {
	$('.circles').append(new PointOfList(classOfShape).addPoint());
}

setActive();
setInterval(changeSlideLeft, 5000); // or changeSlideRight