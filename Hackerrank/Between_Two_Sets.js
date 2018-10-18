function getTotalX(a, b) {
    let sortedNums = b.sort((a, b) => a - b)
    let nums = factorials(a[a.length-1], sortedNums[0]);
    let newNums = [];
    if (sortedNums.length > 1) {
        for (let i = 0; i < nums.length; i++) {
            for (let i2 = 1; i2 < sortedNums.length; i2++) {
                if (b[i2] % sortedNums[i] === 0 && !newNums.includes(sortedNums[i]))
                    newNums.push(sortedNums[i])
            }
        }
    }
    let answer = [];
    let facts = true;
    for (let i = 0; i < newNums.length; i++) {
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
    return answer;
}
