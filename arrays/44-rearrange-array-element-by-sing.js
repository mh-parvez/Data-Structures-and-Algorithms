//when element's group are not equals.

let arr = [1, -4, 2, -5, 3, 6];

function rearrangeArray(arr) {
	let pos = [],
		neg = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			pos.push(arr[i]);
		} else {
			neg.push(arr[i]);
		}
	}

	if (pos.length > neg.length) {
		for (let i = 0; i < neg.length; i++) {
			arr[2 * i] = pos[i];
			arr[2 * i + 1] = neg[i];
		}
		let index = neg.length * 2;
		for (let i = neg.length; i < pos.length; i++) {
			arr[index] = pos[i];
			index++;
		}
	} else {
		for (let i = 0; i < pos.length; i++) {
			arr[2 * i] = neg[i];
			arr[2 * i + 1] = pos[i];
		}
		let index = pos.length * 2;
		for (let i = pos.length; i < neg.length; i++) {
			arr[index] = neg[i];
			index++;
		}
	}

	console.log(arr);
	return arr;
}
rearrangeArray(arr);
