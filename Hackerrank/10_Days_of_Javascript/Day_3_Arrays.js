function getSecondLargest(nums) {
    // Complete the function
    let arr = nums.sort((x, y) => x < y);
    let newArr = [];
    arr.forEach(x => {
        if (!newArr.includes(x)){
            newArr.push(x);
        }
    });
    return  newArr[1];
}
