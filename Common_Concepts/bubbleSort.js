

// console.log(pojo instanceof Object);
console.log([1,6,3,8,6,5,10].bubbleSort()); // [1,3,5,6,6,8.10]

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
