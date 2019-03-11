const subset = (arr) => {
  if (arr.length == 1) return [arr];

  let subs = subset(arr.slice(0, arr.length - 1));
  let last_num = [arr[arr.length - 1]];
  let newSubs = subs.map( sub => sub.concat(last_num));

  return subs.concat(newSubs);
}

console.log(subset([1, 2, 3, 4]));

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
