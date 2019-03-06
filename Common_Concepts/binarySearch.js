const bSearch = function(arr, num) {
  if (arr.length == 0) return null;

  let mid = Math.floor(arr.length / 2);

  if (arr[mid] == num) {
    return mid;
  } else if (arr[mid] > num) {
    return bSearch(arr.slice(0, mid), num);
  } else {
    let recId = bSearch(arr.slice(mid + 1), num);
    return recId === null ? null : mid + recId + 1;
  };
}

let arr1 = [1, 4, 9, 10, 19, 21];
console.log(bSearch(arr1, 1));
console.log(bSearch(arr1, 4));
console.log(bSearch(arr1, 9));
console.log(bSearch(arr1, 10));
console.log(bSearch(arr1, 19));
console.log(bSearch(arr1, 21));
console.log(bSearch(arr1, 20));
console.log(bSearch(arr1, 2));
