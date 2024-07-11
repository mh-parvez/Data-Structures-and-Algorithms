
const arr = [2, 2, 3, 3, 1, 2, 2];

let map = new Map()

for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

map.forEach((count, el) => {
    if (count > arr.length / 2) {
        console.log(el, count)
    }
})

console.log(map)
