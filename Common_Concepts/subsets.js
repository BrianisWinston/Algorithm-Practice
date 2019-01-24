const subset = (arr) => {
  if (arr.length === 0) return [[]];

  let subs = subset(arr.slice(1, arr.length));
  let newSubs = subs.map( el => [arr[0]].concat(el));
  return subs.concat(newSubs);
}

// elegant solution------------
// const getAllSubsets = theArray => {
//   theArray.reduce( (subsets, value) => {
//     subsets.concat(subsets.map(set => [value,...set]))
//   }, [[]] )};

console.log(subset([1, 2, 3, 4]));
