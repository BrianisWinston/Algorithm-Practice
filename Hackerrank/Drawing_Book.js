function pageCount(n, p) {
    let answer;
    if (n / 2 > p) {
        answer = Math.floor(p / 2)
    } else {
        let newNum = n - p;
        if (p % 2 !== 0) {
            answer = Math.floor(newNum / 2) + 1;
        } else {
            answer = Math.floor(newNum / 2);
        }
    }
    return answer;
}
