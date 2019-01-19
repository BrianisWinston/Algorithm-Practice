Array.prototype.bubbleSort = () => {
  // console.log(arguments);
  let sorted = false;
  while (sorted !== true) {
    sorted = true;
    for (let i = 0; i < this.length - 2; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
      }
    }
    sorted;
  }
  return this;
};

console.log(Array.prototype.bubbleSort.apply(null,[1,6,3,8,6,5,10])); // [1,3,5,6,6,8.10]
