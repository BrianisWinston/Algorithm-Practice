const bSearch = (arr, num) => {
  // debugger
  if (arr.length == 0) return null;

  let mid = Math.floor(arr.length / 2);
  if (arr[mid] == num) {
    return mid;
  } else if (arr[mid] > num) {
    return bSearch(arr.slice(0, mid), num)
  } else {
    let id = bSearch(arr.slice(mid + 1), num)
    return id === null ? null : mid + id + 1
  };
};

let arr1 = [1, 4, 9, 10, 19, 21];
console.log(bSearch(arr1, 10));
