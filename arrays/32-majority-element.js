const arr = [2, 2, 3, 3, 1, 2, 2];

for (el of arr) {
    count = 0;
    
	for (let i = 0; i < arr.length; i++) {
		if (el == arr[i]) count++;
    }
	if (count > arr.length / 2) console.log(el);
}
