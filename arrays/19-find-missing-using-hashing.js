let arr = [1, 2, 3, 5, 6];

function missingNumber(arr) {
    let n = arr.length;
    
    let hash = new Array(n+1).fill(0)

    for (let i = 0; i < n -1; i++) {
         hash[arr[i]] = 1
    }
    console.log(hash)

    for (let i = 1; i < n; i++) {
        if (hash[i] == 0) {
            return i;
        }
    }
}

console.log(missingNumber(arr));
