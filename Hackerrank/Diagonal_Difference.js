function diagonalDifference(arr) {
    let firstval = [];
    let secval = [];
    for (let i = 0; i < arr.length; i++) {
        firstval.push(arr[i][i]);
    }
    for (let i = 0; i < arr.length; i++) {
        secval.push(arr[i][arr.length - 1 - i])
    }
    return Math.abs(firstval.reduce((x, y) => x + y) - secval.reduce((x,y) => x + y));
}
