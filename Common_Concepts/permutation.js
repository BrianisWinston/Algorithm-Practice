const permutations = (arr) => {
  if (arr.length <= 1) return [arr];
  // debugger
  let totalPerms = [];
  let first = [arr[0]]; // [1]
  let perms = permutations(arr.slice(1)); // [[2, 3], [3, 2]]
  perms.forEach( perm => {
    for (i = 0;i < perm.length + 1; i++) { // i = 2 , perm = [3, 2]
      let firstHalf = perm.slice(0, i); // [3, 2]
      let secondHalf = perm.slice(i) //[]
      let together = firstHalf.concat(first, secondHalf); // [3, 2, 1]
      totalPerms.push(together);
    }
  });
  return totalPerms; //[[2, 3], [3, 2], [1, 2, 3], [2, 1, 3], [2, 3, 1]
  // [1, 3, 2], [3, 1, 2], [3, 2, 1]]
}

console.log(permutations([1,2,3]) == [
  [1, 2, 3], [2, 1, 3], [2, 3, 1],
  [1, 3, 2], [3, 1, 2], [3, 2, 1]]);
