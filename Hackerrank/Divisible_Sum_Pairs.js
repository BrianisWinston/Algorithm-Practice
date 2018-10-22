function divisibleSumPairs(n, k, ar) {
    let answer = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let i2 = i+1; i2 < ar.length; i2++) {
            if ((ar[i] + ar[i2]) % k === 0) {
                answer++;
            }
        }
    }
    return answer;
}
