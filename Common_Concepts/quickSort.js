Array.prototype.quickSort = function () {
  if (this.length < 2) {
    return this;
  }
  let pivot = this[0];
  let left = [];
  let right = [];
  for (var i = 1; i < this.length; i++) {
    if (this[i] < pivot) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }

  return left.quickSort().concat(pivot, right.quickSort());
};


const equalOrNot = (arr) => {
  let answer = [ 1, 2, 3, 3, 4, 5, 7, 7, 8, 9 ];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] != arr[i]) return false;
  }
  return true;
}

const test = [7,3,5,2,8,7,1,9,3,4,].quickSort();
console.log(`[7,3,5,2,8,7,1,9,3,4,] == [1,2,3,3,4,5,7,7,8,9] ==> ${equalOrNot(test)}`);
