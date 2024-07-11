
let arr = [3, 1, -2, -5, 2, -4];

let positive = [],
	negetive = [];

for (el of arr) {
	if (el > 0) {
		positive.push(el);
	} else {
		negetive.push(el);
	}
}

for (let i = 0; i < arr.length / 2; i++) {
    arr[2 * i] = positive[i];
    arr[2 * i + 1] = negetive[i];
}

console.log(arr);
