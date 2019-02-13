Array.prototype.mergeSort = function (cb) {
  if (this.length <= 1) {
    return this;
  }

  if (cb === undefined) {
    cb = compA;
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(cb);
  let right = this.slice(mid).mergeSort(cb);

  return merge(left, right, cb);
};

const merge = (left, right, cb) => {
  let answer = [];
  while (left.length !== 0 && right.length !== 0) {
    if (cb(left[0], right[0]) <= 0) {
      answer.push(right.shift());
    } else {
      answer.push(left.shift());
    }
  }
  return answer.concat(left, right);
};

const compA = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}

const compB = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1
  }
}

console.log([1,9,2,3,0,5,6,43,24].mergeSort(compA)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort(compB)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITHOUT
