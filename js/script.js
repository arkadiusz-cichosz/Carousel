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
	$('.circles a#0').addClass('isActive');
}

function changeActiveLeft() {
	let activElement = $('.isActive');
	let attrId = parseInt(activElement.attr('id'));
	attrId++;
	if (attrId === carouselItemsLength) {
		attrId=0;
	}
	activElement.removeClass('isActive');
	$('.circles #' + attrId).addClass('isActive'); 
}

function changeActiveRight() {
	let activElement = $('.isActive');
	let attrId = parseInt(activElement.attr('id'));
	attrId--;
	if (attrId < 0) {
		attrId=3;
	}
	activElement.removeClass('isActive');
	$('.circles #' + attrId).addClass('isActive'); 
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

const iconShapeCircle = "<i class=\"fa fa-circle-thin\" aria-hidden=\"true\"></i>";

for (let i = 0; i < carouselItemsLength; i++) {
	$('.circles').append(new Circle(i, iconShapeCircle, i).addElement());
}

setActive();
setInterval(changeSlideLeft, 5000); // or changeSlideRight