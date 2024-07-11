let arr = [10, 22, 12, 3, 0, 1];

function leadersOfAnArray() {
	let leaders = [];
	let maxNumber = Number.MIN_SAFE_INTEGER;

	for (let i = arr.length - 1; i >= 0; i--) {
		if (maxNumber < arr[i]) {
			leaders.push(arr[i]);
		}
		maxNumber = Math.max(maxNumber, arr[i]);
	}

	console.log(leaders);
	return arr;
}

leadersOfAnArray(arr);
