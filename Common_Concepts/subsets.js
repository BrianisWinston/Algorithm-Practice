const subset = (arr) => {
  // if (arr.length === 0) {
  //   return [[]];
  // }
  //
  // let slices = subset(arr.slice(1));
  // console.log(slices);
  // return slices;
  if (arr.length === 0) {
    return [[]];
  }
  debugger
  const first = arr[0];
  const subs = subset(arr.slice(1));
  console.log(subs);

  const newSubs = subs.map(sub => [first].concat(sub) );

  return subs.concat(newSubs);
}

console.log(subset([1, 2, 3]));
