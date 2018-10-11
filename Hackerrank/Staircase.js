function staircase(n) {
    let stairs = [];
    for(let i = n;i > 0;i--) {
        let hashes = n - i;
        let spaces = n - hashes;
        for(let i2=spaces;i2 >= 0;i2--) {
            stairs.push(' ');
        }
        for(let i3=hashes;i3 >= 0;i3--) {
            stairs.push('#')
        }
        // if (stairs.includes('#')) {
            stairs.shift();
            stairs.shift();
            console.log(stairs.join(''));
        // }
        stairs = [];
    }
}
