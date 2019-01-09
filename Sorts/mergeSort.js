//Write an Array#merge_sort method; it should not modify the original array.
// If a comparator is passed, it should sort according to that callback.


Array.prototype.mergeSort = function(comparator) {
  let newArr = this.slice()
  if (comparator === undefined) {
    comparator = compA;
  }
  let mid = Math.floor(newArr.length / 2)
  let left = newArr.slice(0, mid).mergeSort();
  let right = newArr.slice(mid).mergeSort();

  return merge(left, right, comparator);
};

function merge(left, right, comparator) {
  let sorted = [];
  console.log(`asdfsa ${right}`);
  while (left.length !== 0 && right.length !== 0) {
    if (comparator(left[0], right[0]) <= 0) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  return sorted;
}






const compA = (a,b) => {

  if (a > b) {
    return -1;
  } else if (a < b){
    return 1;
  } else {
    return 0;
  }

};

console.log([1,9,2,3,0,5,6,43,24].mergeSort(compA)); // ONE WITH COMPARATOR
console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITHOUT
