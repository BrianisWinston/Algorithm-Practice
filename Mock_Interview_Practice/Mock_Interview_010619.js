// Given two sorted arrays of size m & n,
// merge the elements of the first array with the
// second array by maintaining the sorted order.
// i.e. fill the first array with with the first m
// smallest elements and fill the second array with
// the remaining n elements.

// inPlace([1, 3, 5], [2, 4, 6, 8]) === [1, 2, 3], [4, 5, 6, 8]
// inPlace([1, 4, 5], [2, 3, 6, 8]) === [1, 2, 3], [4, 5, 6, 8]
// inPlace([], [1, 2]) === [], [1, 2]

function inPlace(m, n) {
  debugger
  let mLength = m.length;
  let shifted = 0;
  let idx1 = 0;
  let idx2 = 0;
  while (shifted !== mLength) {
    if (m[idx1] < n[idx2]) {
      shifted += 1;
      idx1 += 1;
    } else {
      shifted += 1;
      let out = n.shift();
      m.splice(idx1, 0, out);
      idx2 += 1;
    }
  }
  let limit = m.length - shifted;
  let inc = 0;
  let position = 0;
  while (inc < limit) {
    let moved = m.pop();
    for (let i = 0; i < n.length; i++) {
      if (n[i] < moved && n[i+1] > moved) {
        n.splice(i + 1, 0, moved);
        break
      }
    }
    inc += 1;
  }
  return [m, n];
}


console.log(inPlace([1, 3, 5,100], [2, 4, 6, 8,59,200,300]))
