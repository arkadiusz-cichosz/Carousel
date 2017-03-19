function createID() {
	const alphaTable = ['a','b','c','d','e','f','g','h','i','j'];
	let randomID = '';
	for (let j = 0; j < alphaTable.length; j++) {
		randomID += alphaTable[Math.floor((Math.random()*10))];
	}
	return randomID;
}