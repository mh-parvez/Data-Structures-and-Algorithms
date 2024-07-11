let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];

function search(arr, x) {
	for (el of arr) {
		if (el == x) {
			return 1;
		}
	}
	return 0;
}

function longestConsecutiveLength(arr) {
	let longest = 1;
	for (let i = 0; i < arr.length; i++) {
		let x = arr[i];
		let count = 1;
		while (search(arr, x + 1)) {
			x++;
			count++;
		}
		longest = Math.max(longest, count);
	}
	console.log(longest);
}

longestConsecutiveLength(arr);
