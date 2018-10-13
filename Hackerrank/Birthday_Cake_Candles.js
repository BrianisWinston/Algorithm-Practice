function birthdayCakeCandles(ar) {
    let count = 0;
    let max = null;
    for (let i = 0; i < ar.length; i++) {
        if (max === null || max < ar[i]) {
            max = ar[i];
        }
    }
    for (let i = 0; i < ar.length; i++) {
        if (max === ar[i]) {
            count += 1;
        }
    }
    return count;
}
