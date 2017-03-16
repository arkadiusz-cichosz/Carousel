class Circle {
	constructor(address, shape, id) {
		this.address = '#' + address || '#';
		this.shape = shape;
		this.id = id || 0;
	}

	checkElement() {
		console.log(this.address + "/" + this.shape + "/" + this.id);
	}
		
	addElement() {
		const link = "<a href=\"" + this.address + "\" id=\"" + this.id + "\" >" + this.shape + "</a>";
		return link;
	}	
}