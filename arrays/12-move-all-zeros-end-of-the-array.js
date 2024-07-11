let arr = [1, 2, 0, 0, 3, 4, 5, 6, 0, 7, 8, 0];

let temp = [];

//step-1: copy all non-zero in temp
for (el of arr) {
	if (el != 0) {
		temp.push(el);
	}
}

//step-2: push all non-zero in orginal arr
for (let i = 0; i < temp.length; i++) {
	arr[i] = temp[i];
}

//step-3: fill with zero

for (let i = temp.length; i < arr.length; i++) {
	arr[i] = 0;
}

console.log(arr);
