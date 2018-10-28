function dayOfProgrammer(year) {
    let answer = null;
    if (year >= 1700 && year <= 1917) {
        if (year % 4 === 0) {
            answer = `12.09.${year}`
        } else {
            answer = `13.09.${year}`
        }
    }   else if (year === 1918) {
        answer = `26.09.${year}`
    }   else {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            answer = `12.09.${year}`
        } else {
            answer = `13.09.${year}`
        }
    }
    return answer;
}

console.log(dayOfProgrammer(2100));
