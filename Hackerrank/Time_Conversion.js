function timeConversion(s) {
    let answer = s.substr(0, 8);
    if (s.substr(s.length - 2,2) === 'PM') {
        let firstNums = answer.substr(0, 2);
        firstNums = parseInt(firstNums) + 12
        answer = firstNums + answer.substr(2, 6);
    }
    if (answer.substr(0, 2) === '24') {
        answer = "00" + answer.substr(2, answer.length - 3);
    }
    return answer;
}
