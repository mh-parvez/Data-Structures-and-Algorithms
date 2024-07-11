
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 6, 7, 8];

let visited = new Array(arr2.length).fill(0);

let interSection = [];

for (let i = 0; i < arr1.length; i++) {

	for (let j = 0; j < arr2.length; j++) {

		if (arr1[i] == arr2[j] && visited[j] == 0) {
			
			interSection.push(arr1[i]);
			visited[j] = 1;
			break;
		}
		if (arr1[i] < arr2[j]) break;
	}
}

console.log(visited);
console.log(interSection);
