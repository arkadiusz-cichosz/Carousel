class PointOfList {

	constructor(shape, numberOfCharacters) {
		this.shape = shape;
		this.id = ID.create(numberOfCharacters) || ID.create(5);
	}

	checkPoint() {
		console.log(this.shape + "/" + this.id);
	}
		
	addPoint() {
		const $point = $('<div>').addClass(this.shape).attr('id', this.id).text(' ');
		return $point;
	}	
}