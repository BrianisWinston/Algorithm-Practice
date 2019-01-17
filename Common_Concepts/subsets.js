const subset = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  let first = arr[0];
  let sliced = subset(arr.slice(1));

  let newSubs = sliced.map( sub => {
    let wsup = [first];
    if (sub instanceof Array) {
      sub.forEach( el => wsup.push(el));
    } else {
      wsup.push(el)
    };
    return wsup
  })
  return sliced.concat(newSubs);
}

console.log(subset([1, 2, 3, 4, 5]));
