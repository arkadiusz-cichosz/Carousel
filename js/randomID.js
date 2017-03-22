class ID {
	static create(numberOfCharacters) {
		const alphaTable = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		let randomID = '';
		for (let j = 0; j < numberOfCharacters; j++) {
			randomID += alphaTable[Math.floor(Math.random()*alphaTable.length)];
		}
		return randomID;
	}	
}
