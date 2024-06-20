//step: xor of all el
//step: find rsb of xor
//step: cheak rsb and xor el in groupwise
//step: print less to greter

function twoUnique(arr) {
	let XxorY = 0;
	for (el of arr) {
		XxorY ^= el;
	}
	const rsb = XxorY & -XxorY;

	let x = 0,
		y = 0;

	for (el of arr) {
		if ((el & rsb) === 0) {
			x ^= el;
		} else {
			y ^= el;
		}
	}
	
	if (x < y) {
		console.log(x, y);
	} else {
		console.log(y, x);
	}
}

const arr = [1, 2, 3, 4, 1, 2, 3, 4, 99, 69];
twoUnique(arr);
