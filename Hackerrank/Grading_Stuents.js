function gradingStudents(grades) {
    let answer = [];
    let number = null;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            answer.push(grades[i])
        } else {
            number = grades[i]
            while (number % 5 !== 0) {
                number++
            }
            if (number - grades[i] < 3) {
                answer.push(number)
            } else {
                answer.push(grades[i])
            }
        }
    }
    return answer;
}
