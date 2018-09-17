function processData(input) {
    let numbers = [];
    let arr = [];
    arr.push(input);
    numbers = arr[0].split('\n').map(num => parseInt(num));
    let costOfCut = numbers[0];
    let metalPrice = numbers[1];
    let listOfRods = numbers.slice(3).sort((a, b)=> a - b);
    let cutsMade = 0;
    let largestRod = listOfRods[listOfRods.length - 1];
    let range = [];
    let profit = [];
    for (let i = 1; i <= largestRod; i++) {
        range.push(i) 
    }
    range.forEach(length => {
        listOfRods.forEach(rod => {
            cutsMade += Math.floor(rod / length);
        })
        profit.push(Math.floor(cutsMade * length * metalPrice - cutsMade * costOfCut));
        cutsMade = 0;
    })
    console.log(profit.sort((a, b) => a - b)[profit.length - 1]);
}
