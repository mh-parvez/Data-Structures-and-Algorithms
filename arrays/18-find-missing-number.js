let arr = [1, 2, 3, 5, 6];

function missingNumber(arr) {
	let n = arr.length;

	for (let i = 1; i <= n; i++) {
		let flag = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] == i) {
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			return i;
		}
	}
}

console.log(missingNumber(arr))
