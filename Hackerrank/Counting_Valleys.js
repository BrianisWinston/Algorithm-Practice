function countingValleys(n, s) {
    let answer = 0;
    let inc = 0;
    let last = 0;
    s.split('').forEach(el => {
        if (el === "D") {
            inc--
        } else {
            inc++
        }
        if (last >= 0 && inc < 0) {
            answer++
        }
        last = inc;
    })
    return answer;
}
