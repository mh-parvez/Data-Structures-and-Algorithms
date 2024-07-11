let arr = [57, 47, 84, 3, 99, 30];

let smallest = arr[0];

for (el of arr) {
	if (el < smallest) {
		smallest = el;
	}
}

console.log(smallest);
