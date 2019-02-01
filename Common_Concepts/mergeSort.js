Array.prototype.mergeSort = function (cb) {
  if (this.length <= 1) return this;

  if (cb === null) {
    cb = compA;
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(cb);
  let right = this.slice(mid).mergeSort(cb);

  return merge(left, right, cb);
}

const compA = (x, y) => {
  if (x > y) {
    return -1
  } else if (x === y) {
    return 0
  } else {
    return 1
  };
};

const compB = (x, y) => {
  if (x > y) {
    return 1
  } else if (x === y) {
    return 0
  } else {
    return - 1
  };
};

console.log([1,9,2,3,0,5,6,43,24].mergeSort(compA)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort(compB)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITHOUT
