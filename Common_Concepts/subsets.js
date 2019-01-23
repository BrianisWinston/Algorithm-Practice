const subset = (arr) => {
  if (arr.length === 0) return [[]];

  let first = arr[0];
  let sets = subset(arr.slice(1));

  let newSubs = sets.map( el => [first].concat(el));
  return sets.concat(newSubs);
}

// elegant solution------------
// const getAllSubsets = theArray => {
//   theArray.reduce( (subsets, value) => {
//     subsets.concat(subsets.map(set => [value,...set]))
//   }, [[]] )};

console.log(subset([1, 2, 3, 4]));
