function dayOfProgrammer(year) {
    let answer = null;
    if (year >= 1700 || year <= 1917) {
        if (year % 4 === 0) {
            answer = `12.09.${year}`
        } else {
            answer = `12.08.${year}`
        }
    }   else if (year === 1918) {

    }   else {
        if (year % 4 === 0) {
            answer = `12.09.${year}`
        } else {
            answer = `12.08.${year}`
        }
    }
}
