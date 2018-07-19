/*
 * Create the function factorial here
 */
function factorial(n) {
    let answer = n;
    for(let inc = n - 1; inc >= 1; inc--) {
        answer = answer * inc;
    }
    return answer;
}
