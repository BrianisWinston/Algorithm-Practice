function birthday(s, d, m) {
    let answer = 0;
    let total = 0;
    for (let i = m;i < s.length;i++) {
        for(let i2 = i - m;i2 <= i; i2++) {
            total += s[i2];
            // console.log(s[i2])
        }
        console.log(total)
        if (total === d) {
            answer++;
        }
        total = 0;
    }
    return answer;
}
