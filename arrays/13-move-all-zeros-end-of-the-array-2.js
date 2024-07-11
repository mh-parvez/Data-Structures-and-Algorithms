let arr = [1, 2, 0, 0, 3, 4, 5, 6, 0, 7, 8, 0];

//step-1: find zero'th place
let j = -1;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 0) {
		j = i;
		break;
	}
}

//step-2: swaping with non zero element
for (let i = j + 1; i < arr.length; i++) {
	if (arr[i] != 0) {
		//swaping
		[arr[i], arr[j]] = [arr[j], arr[i]];
		j++;
	}
}

console.log(arr);
