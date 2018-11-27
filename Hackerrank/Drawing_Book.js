function pageCount(n, p) {
    let answer;
    if (n / 2 > p) {
        answer = Math.floor(p / 2)
    } else {
        let newNum = n - p;
        answer = Math.floor(newNum / 2);
    }
    return answer;
}
