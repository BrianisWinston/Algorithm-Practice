function sockMerchant(n, ar) {
    let socks = {};
    let answer = 0;
    ar.forEach(el => {
        if (socks[el] === undefined) {
            socks[el] = 1;
        } else {
            socks[el] += 1;
        }
    })
    Object.entries(socks).forEach(([a, b]) => {
        let amount = b;
        while (amount !== 0) {
            if (amount % 2 === 0) {
                amount -= 2;
                answer++;
            } else {
                amount -= 1;
            }
        }
    });
    return answer
}
