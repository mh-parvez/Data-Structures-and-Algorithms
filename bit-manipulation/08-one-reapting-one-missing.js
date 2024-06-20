function missingAndReaptin(arr) {
	let xor = 0;
	for (el of arr) {
		xor = xor ^ el;
	}
	for (let i = 1; i <= arr.length; i++) {
		xor = xor ^ i;
	}

	const rsb = xor & -xor;

	let x = 0,
		y = 0;

	for (el of arr) {
		if ((el & rsb) === 0) {
			x = x ^ el;
		} else {
			y = y ^ el;
		}
	}
	for (let i = 1; i <= arr.length; i++) {
		if ((i & rsb) === 0) {
			x = x ^ i;
		} else {
			y = y ^ i;
		}
	}

	// console.log(x, y);
	for (el of arr) {
		if (el === x) {
			console.log(`missing: ${y}`);
            console.log(`reapting: ${x}`);
            break;
		} else {
			console.log(`missing: ${x}`);
            console.log(`reapting: ${y}`);
            break;
		}
	}
}

let arr = [1, 2, 8, 4, 5, 6, 7, 8];
missingAndReaptin(arr);
