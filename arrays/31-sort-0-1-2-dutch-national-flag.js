let arr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function sort012(arr) {
	let low = 0,
		mid = 0,
		high = arr.length - 1;
	while (mid <= high) {
		if (arr[mid] == 0) {
			[arr[mid], arr[low]] = [arr[low], arr[mid]];
			low++;
			mid++;
		} else if (arr[mid] == 1) {
			mid++;
		} else {
			[arr[high], arr[mid]] = [arr[mid], arr[high]];
			high--;
		}
    }
    console.log(arr)
}
sort012(arr);
