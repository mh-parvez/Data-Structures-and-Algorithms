let arr = [1, 1, 2, 2, 3, 3];

let i = 0;

for (let j = 1; j < arr.length; j++) {
	if (arr[i] != arr[j]) {
		arr[i + 1] = arr[j];
		i++;
	}
}

console.log("Num =", i + 1);
