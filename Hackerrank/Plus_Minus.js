function plusMinus(arr) {
    let answer = [0, 0, 0];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            answer[2] += 1;
        } else if (arr[i] < 0) {
            answer[1] += 1;
        } else {
            answer[0] += 1;
        }
     }
    answer.map(num => {
        console.log(num/arr.length);
    });
}
