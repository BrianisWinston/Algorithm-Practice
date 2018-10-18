function getTotalX(a, b) {
    let sortedNums = b.sort((a, b) => a - b)
    let nums = factorials(a[a.length-1], sortedNums[0]);
    let newNums = [];
    let answer = [];
    let facts = true;
    let facts2 = true;

    if (sortedNums.length > 1) {
      for (let i2 = 0; i2 < nums.length; i2++) {
        for (let i = 1;i < sortedNums.length; i++) {
          if (sortedNums[i] % nums[i2] !== 0) {
            facts2 = false;
          }
        }
        if (facts2 === true && !newNums.includes(nums[i2])) {
          newNums.push(nums[i2])
        }
        facts2 = true;
      }
    } else {
      newNums = nums;
    }
    debugger
    for (let i = 0; i < newNums.length; i++) {
        for (let i2 = 0; i2 < a.length; i2++) {
            if (newNums[i] % a[i2] !== 0) {
                facts = false;
            }
        }
        if (facts === true) {
            answer.push(newNums[i])
        }
        facts = true;
    }
    // console.log(sortedNums);
    // console.log(nums);
    // console.log(newNums);
    // console.log(answer);

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


let a = [2];
let b = [20, 30, 12];
// let a = [1];
// let b = [100];
console.log(getTotalX(a, b))
