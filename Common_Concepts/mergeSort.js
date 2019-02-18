Array.prototype.mergeSort = function (cb) {
  if (this.length == 1) return this;
  if (typeof cb !== 'function') {
    cb = compA;
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(cb);
  let right = this.slice(mid).mergeSort(cb);

  return merge(left, right, cb);
};

const merge = (l, r, cb) => {
  let answer = [];
  while (l.length !== 0 && r.length !== 0) {
    if (cb(l[0], r[0]) <= 0) {
      answer.push(r.shift());
    } else {
      answer.push(l.shift());
    }
  };
  return answer.concat(l, r);
}

const compA = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  };
};

const compB = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1
  };
};

console.log([1,9,2,3,0,5,6,43,24].mergeSort(compA)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort(compB)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITHOUT
