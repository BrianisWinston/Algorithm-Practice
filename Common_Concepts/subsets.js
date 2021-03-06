// function subset(arr) {
//   if (arr.length == 0) return [arr];
//
//   let subs = subset(arr.slice(1));
//   let firstNum = [arr[0]];
//   let newSubs = subs.map( sub => firstNum.concat(sub));
//
//   return subs.concat(newSubs);
// }

function subset(arr) {
  if (arr.length == 0) return [arr];

  let subsets = subset(arr.slice(0, arr.length - 1));
  let lastNum = arr[arr.length - 1];

  let newSubs = subsets.map( function (sub) { return sub.concat([lastNum]) } )
  return subsets.concat(newSubs);
};

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
