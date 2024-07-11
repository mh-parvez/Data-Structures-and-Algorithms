let arr = [10, 22, 12, 3, 0, 1];

function leadersOfAnArray() {
	let leaders = [];

	for (let i = 0; i < arr.length; i++) {
		let leader = true;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				leader = false;
				break;
			}
		}
		if (leader == true) {
			leaders.push(arr[i]);
		}
	}
	console.log(leaders);
	return arr;
}

leadersOfAnArray(arr);
