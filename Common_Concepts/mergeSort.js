//Write an Array#merge_sort method; it should not modify the original array.
// If a comparator is passed, it should sort according to that callback.


Array.prototype.mergeSort = function (cb) {
  if (this.length === 1) return this;
  if (cb === undefined) cb = compA;

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(cb);
  let right = this.slice(mid).mergeSort(cb);

  return merge(left, right, cb);
};

function merge(left, right, cb) {
  let answer = [];
  while (left.length !== 0 && right.length !== 0) {
    if ( cb(left[0], right[0]) <= 0 ) {
      answer.push(right.shift());
    } else {
      answer.push(left.shift());
    }
  }
  answer = answer.concat(left, right);
  return answer;
};

const compA = (a,b) => {

  if (a > b) {
    return -1;
  } else if (a < b){
    return 1;
  } else {
    return 0;
  }

};

const compB = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log([1,9,2,3,0,5,6,43,24].mergeSort(compA)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort(compB)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITHOUT
