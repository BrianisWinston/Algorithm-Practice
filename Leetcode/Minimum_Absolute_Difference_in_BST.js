var getMinimumDifference = function(root) {
    let nums = [];
    let answer = null;
    let arr = [root];
    let popped = null;
    while (arr.length !== 0) {
        popped = arr.shift();
        nums.push(popped.val);
        if (popped.left !== null) {
            arr.push(popped.left);
        }
        if (popped.right !== null) {
            arr.push(popped.right);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        for (let i2 = i + 1; i2 < nums.length; i++) {
            if (answer === null || Math.abs(nums[i] - nums[i2]) < answer) {
                answer = Math.abs(nums[i] - nums[i2]);
            }
        }
    }
    return answer;
};
