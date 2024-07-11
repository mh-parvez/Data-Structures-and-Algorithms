let arr = [1, 27, 3, 4, 5, 6, 7, 8];

function sortedChecking(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] >= arr[i - 1]) {
		} else {
			return false;
		}
	}
	return true;
}

if (sortedChecking(arr)) {
    console.log("Sorted");
} else {
	console.log("Not Sorted");
}
