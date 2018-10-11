function miniMaxSum(arr) {
    let min = null;
    let max = null;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let i2 = 0; i2 < arr.length; i2++) {
            if (i !== i2) {
                sum += arr[i2];
            }
        }
        if (min === null || sum <= min) {
            min = sum;
        }
        if (max === null || sum >= max) {
            max = sum
        }
        sum = 0
    }
    console.log(min, max);
}
