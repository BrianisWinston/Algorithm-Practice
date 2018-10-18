function getTotalX(a, b) {
    let nums = factorials(a[a.length-1], b[0]);
    let answer = [];
    let facts = true;
    for (let i = 0; i < nums.length; i++) {
        for (let i2 = 0; i2 < a.length; i2++) {
            if (nums[i] % a[i2] !== 0) {
                facts = false;
            }
        }
        if (facts === true) {
            answer.push(nums[i])
        }
        facts = true;
    }
    return answer.length;
}

function factorials(begin, end) {
    let facts = [];
    for (let i = begin; i <= end; i++) {
        if (end % i === 0) {
            facts.push(i);
        }
    }
    return facts;
}
