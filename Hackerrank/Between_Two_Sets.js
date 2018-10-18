function getTotalX(a, b) {
    let sortedNums = b.sort((a, b) => a - b)
    let nums = factorials(a[a.length-1], sortedNums[0]);
    let newNums = [];
    let answer = [];
    let facts = true;

    if (sortedNums.length > 1) {
        for (let i = 0; i < nums.length; i++) {
            for (let i2 = 1; i2 < sortedNums.length; i2++) {
                if (sortedNums[i2] % nums[i] === 0 && !newNums.includes(nums[i]))
                    newNums.push(nums[i])
            }
        }
    } else {
      newNums = nums;
    }

    for (let i = 0; i < newNums.length; i++) {
        for (let i2 = 0; i2 < a.length; i2++) {
            if (newNums[i] % a[i2] !== 0) {
                facts = false;
            }
        }
        if (facts === true) {
            answer.push(nums[i])
        }
        facts = true;
    }
    console.log(newNums);

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


// let a = [2];
// let b = [20, 30, 12];
let a = [1];
let b = [100];
console.log(getTotalX(a, b))
