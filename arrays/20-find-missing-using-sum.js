let arr = [1, 2, 3, 5, 6];

function missingNumber(naturalSum, sum) {
	return naturalSum - sum;
}

const naturalNumSum = (N) => (N * (N + 1)) / 2;
const naturalSum = naturalNumSum(arr[arr.length - 1])

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(missingNumber(naturalSum, sum));
