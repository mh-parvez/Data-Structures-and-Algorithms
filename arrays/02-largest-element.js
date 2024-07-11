let arr = [57, 47, 84, 3, 99, 30];

let largest = arr[0];

for (el of arr) {
	if (el > largest) {
		largest = el;
	}
}

console.log(largest);

