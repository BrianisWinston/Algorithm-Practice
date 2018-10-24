var minDiffInBST = function(root) {
    let nums = [];
    let arr = [root];
    let popped = null;
    let answer = null;
    while (arr.length !== 0) {
        popped = arr.pop();
        nums.push(popped.val);
        if (popped.left !== null) {
            arr.push(popped.left);
        }
        if (popped.right !== null) {
            arr.push(popped.right);
        }
    }
    for (i = 0; i < nums.length; i++) {
        for (i2 = i + 1; i2 < nums.length; i2++) {
            if (answer === null || Math.abs(nums[i] - nums[i2]) < answer) {
                answer = Math.abs(nums[i] - nums[i2]);
            }
        }
    }
    return answer;
};
