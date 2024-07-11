
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let ans = 7;

let maxSum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
	for (let j = i; j < arr.length; j++) {
		let sum = 0;
		for (let k = i; k <= j; k++) {
			sum += arr[k];
            maxSum = Math.max(sum, maxSum)
		}
	}
}
console.log(maxSum);
