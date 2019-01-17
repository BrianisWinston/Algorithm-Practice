const subset = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  let first = arr[0];
  let subs = subset(arr.slice(1));

  let newSubs = subs.map( el => [first].concat(el))

  return subs.concat(newSubs);
}

console.log(subset([1, 2, 3]));
