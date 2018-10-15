function kangaroo(x1, v1, x2, v2) {
    let first = [x1, x2].sort()[1];
    let second = [x1, x2].sort()[0];
    while (first >= second) {
        first += v1;
        second += v2;
        if (first === second) {
            return 'YES';
        }
    }
    return 'NO';
}
