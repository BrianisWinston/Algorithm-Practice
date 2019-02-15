const subset = (arr) => {
  if (arr.length === 0) return [[]];

  let subs = subset(arr.slice(1));
  let first = [arr[0]];
  let newSubs = subs.map( el => first.concat(el));
  return subs.concat(newSubs);
}


// const subset = (arr) => {
//   if (arr.length === 0) return [[]];
//
//   let first = [arr[arr.length - 1]];
//   let subs = subset(arr.slice(0, arr.length - 1));
//   let newSubs = subs.map( el => el.concat(first));
//
//   return subs.concat(newSubs);
// }
// elegant solution------------
// const getAllSubsets = theArray => {
//   theArray.reduce( (subsets, value) => {
//     subsets.concat(subsets.map(set => [value,...set]))
//   }, [[]] )};

console.log(subset([1, 2, 3, 4]));
