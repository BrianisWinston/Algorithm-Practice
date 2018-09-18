function getLetter(s) {
    let letter;
    let first = ['a', 'e', 'i', 'o', 'u'];
    let second = ['b', 'c', 'd', 'f', 'g'];
    let third = ['h', 'j', 'k', 'l', 'm'];
    let fourth = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    // Write your code here
    if (first.includes(s[0])) {
        letter = "A";
    } else if (second.includes(s[0])) {
        letter = "B";
    } else if (third.includes(s[0])) {
        letter = "C";
    } else if (fourth.includes(s[0])) {
        letter = "D";
    }

    return letter;
}
