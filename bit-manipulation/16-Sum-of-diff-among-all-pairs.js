const arr = [23, 25, 21, 18];

let result = 0;

for (let i = 0; i < 32; i++) {
	let countOn = 0;

	for (el of arr) {
		if ((el & (1 << i)) != 0) {
			countOn++;
		}
	}

	let countOff = arr.length - countOn;
	let diff = countOn * countOff * 2;
	result += diff;
}
console.log(result);
