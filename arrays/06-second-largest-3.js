let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let largest = arr[0],
	secondLargest = -1;

for (let i = 1; i < arr.length; i++) {
	if (arr[i] > largest) {
		secondLargest = largest;
		largest = arr[i];
	} else if (arr[i] < largest && arr[i] > secondLargest) {
		secondLargest = arr[i];
	}
}

console.log("largest: ", largest);
console.log("second largest: ", secondLargest);
