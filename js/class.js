class PointOfList {
	constructor(shape, id) {
		this.shape = shape;
		this.id = id;
	}

	checkPoint() {
		console.log(this.shape + "/" + this.id);
	}
		
	addPoint() {
		const point = "<div id=\"" + this.id + "\" class=\"" + this.shape + "\"> </div>";
		return point;
	}	
}