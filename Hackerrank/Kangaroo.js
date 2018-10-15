function kangaroo(x1, v1, x2, v2) {
    let first = x1;
    let second = x2
    if (v1 < v2 || v1 === v2) {
        return 'NO';
    }
    while (first <= second) {
        first += v1;
        second += v2;
        if (first === second) {
            return 'YES';
        }
    }
    return 'NO';
}
