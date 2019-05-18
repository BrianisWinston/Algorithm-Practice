// DYNAMIC PROGRAMMING-----------------------------------

SOLUTIONS = {
  0: 0,
  1: 1
};

const fibSums = (num) => {
  if (SOLUTIONS[num] !== undefined) {
    return SOLUTIONS[num];
  } else {
    SOLUTIONS[num] = fibSums(num - 1) + fibSums(num - 2);
  }
  return fibSums(num - 1) + fibSums(num - 2);
};


// FIBSUMS = {
//   0: 0,
//   1: 1
// };
//
// const fibSums = (num) => {
//   if (FIBSUMS[num] !== undefined) {
//     return FIBSUMS[num];
//   } else {
//     FIBSUMS[num] = fibSums(num - 1) + fibSums(num - 2);
//   }
//   return fibSums(num - 1) + fibSums(num - 2);
//   return fibSums[num];
// };

console.log(fibSums(0) == 0)
console.log(fibSums(1) == 1)
console.log(fibSums(2) == 1)
console.log(fibSums(3) == 2)
console.log(fibSums(4) == 3)
console.log(fibSums(5) == 5)
console.log(fibSums(6) == 8)
console.log(fibSums(7) == 13)
console.log(fibSums(8) == 21)
console.log(fibSums(9) == 34)
console.log(fibSums(10) == 55)
console.log(fibSums(45))
