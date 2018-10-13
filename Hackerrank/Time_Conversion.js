function timeConversion(s) {
    let answer = s.substr(0, 8);
    if (s.substr(s.length - 2,2) === 'PM' && s.substr(0,2) !== '12') {
        let firstNums = answer.substr(0, 2);
        firstNums = parseInt(firstNums) + 12
        if (firstNums === 24) {
            firstNums = "00"
        }
        answer = firstNums + answer.substr(2, 6);
    } else if (s.substr(s.length - 2,2) === 'AM' && answer.substr(0, 2) === '12') {
        answer = "00" + answer.substr(2, answer.length - 2);
    }
    return answer;
}

console.log('12:40:22AM === 00:40:22', timeConversion('12:45:54PM'))
