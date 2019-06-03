// [1, 2, 0, 3, 4, 0, 5, 6, 0] == [1, 2, 6, 3, 4, 5, 0, 0, 0]
                // |  |
// [1, 2, 6, 3, 4, 0 ,5, 0, 0]
          // arr[0], arr[1] = arr[1], arr[0]
// see zero, loop to switch positions until another zero

const trickyPointers = (arr) => {
  let p1 = 0
  let p2 = arr.length - 1;
  while (p1 < p2) {
    if (arr[p1] == 0 && arr[p2] != 0) {
      let holder = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = holder;

    };
    if (arr[p1] != 0) {
     ++p1;
    };
    if (arr[p2] == 0) {
      --p2;
    };
  };
  return arr;
};

console.log(trickyPointers([0, 0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0,123423, 12342]));
