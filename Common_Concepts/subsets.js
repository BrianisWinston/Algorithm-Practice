const subset = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  let subs = subset(arr.slice(0, arr.length - 1));

  return subs.concat(subs.map( el => el.concat([arr[arr.length-1]])))
}

// elegant solution------------
// const getAllSubsets = theArray => {
//   theArray.reduce( (subsets, value) => {
//     subsets.concat(subsets.map(set => [value,...set]))
//   }, [[]] )};

console.log(subset([1, 2, 3]));
