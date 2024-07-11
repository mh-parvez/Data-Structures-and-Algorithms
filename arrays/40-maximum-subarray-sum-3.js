
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// let arr = [-2, -3, -1, -2, -3]; //for condition number 3
let ans = 7;

const maxSubArraySum = () => {
	let sum = 0,
		maximum = Number.MIN_SAFE_INTEGER;

	for (el of arr) {
		sum += el;
		if (sum > maximum) {
			maximum = sum;
		}
		if (sum < 0) {
			sum = 0;
		}
		if (maximum < 0) {
			maximum = 0;
		}
	}
	console.log(maximum);
	return maximum;
};

maxSubArraySum(arr);
