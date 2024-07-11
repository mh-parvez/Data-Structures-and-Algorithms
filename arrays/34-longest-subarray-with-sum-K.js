let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;

let len = 0;
for (let i = 0; i < arr.length; i++) {
	for (let j = i; j < arr.length; j++) {
		let sum = 0;
		for (let k = i; k <= j; k++) {
			sum += arr[k];
		}
		if (k == sum) {
			len = Math.max(len, j - i + 1);
		}
	}
}
console.log(len);
