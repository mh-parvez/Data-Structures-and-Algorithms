let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let ans = 7;

let maxSum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
	let sum = 0;
	for (let j = i; j < arr.length; j++) {
		sum += arr[j];
		maxSum = Math.max(sum, maxSum);
	}
}
console.log(maxSum);
