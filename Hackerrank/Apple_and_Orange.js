function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let answer = [0, 0];
    apples.forEach(apple => {
        let dist = a + apple;
        if (dist >= s && dist <= t) {
            answer[0]++
        }
    })
    oranges.forEach(orange => {
        let dist1 = b + orange;
        if (dist1 <= t && dist1 >= s) {
            answer[1]++
        }
    })
    answer.forEach(num => console.log(num));
}
