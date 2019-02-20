

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
