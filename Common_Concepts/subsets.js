const subset = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  let first = arr[0];
  let sliced = subset(arr.slice(1));

  let newSubs = sliced.map( sub => [first].concat(sub));
  return sliced.concat(newSubs);
}

console.log(subset([1, 2, 3]));
