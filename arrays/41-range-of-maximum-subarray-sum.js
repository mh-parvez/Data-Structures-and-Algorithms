let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

const maxSubArraySumRange = () => {
    let sum = 0,
        maximum = Number.MIN_SAFE_INTEGER,
        ansStart = -1,
        ansEnd = -1,
        start = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (sum == 0) {
            start = i;
        }
        sum = sum + arr[i];
        if (sum > maximum) {
            maximum = sum;
            ansStart = start;
            ansEnd = i
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    console.log(ansStart, ansEnd);
};

maxSubArraySumRange(arr);
