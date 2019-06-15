Array.prototype.bubbleSort = function (cb) {
  if (typeof cb != 'function') cb = compA;

  let sorted = false;
  while (sorted == false) {
    sorted = true;
    for(let i = 0; i < this.length - 2; i++) {
      if (cb(this[i], this[i + 1]) >= 0) {
        [this[i], this[i + 1] = this[i + 1], this[i]];
        sorted = false;
      };
    };
  };
  return this;
};

const compA = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  };
};

const compB = (a, b) => {
 if (a > b) {
   return -1;
 } else if (a == b) {
   return 0;
 } else {
   return 1;
 };
};

// console.log(pojo instanceof Object);
console.log([1,6,3,8,6,5,10].bubbleSort()); // [1,3,5,6,6,8,10]
console.log([1,6,3,8,6,5,10].bubbleSort(compA)); // [10,8,6,6,5,3,1]
console.log([1,6,3,8,6,5,10].bubbleSort(compB)); // [1,3,5,6,6,8,10]

// Array.prototype.bubbleSort = () => {
//   console.log(this);
//   // console.log(`yeeee ${this.what}`);
//   let sorted = false;
//   while (sorted !== true) {
//     sorted = true;
//     for (let i = 0; i < this.what.length - 2; i++) {
//       if (this.what[i] > this.what[i + 1]) {
//         [this.what[i], this.what[i + 1]] = [this.what[i + 1], this.what[i]];
//         sorted = false;
//       }
//     }
//     sorted;
//   }
//   return this.what;
// };

// console.log(Array.prototype.bubbleSort.call([1,6,3,8,6,5,10]));
