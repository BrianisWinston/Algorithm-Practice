
// psuedo-code
// create answer var
// push empty arr in answer var
// loop pushes all single elements in answer

 answer = [[1]]
 holder = []

// loop grows in array size until array equals length
//  have two loops, compare indexes, if equal, skip
// if not, push in subarray



// array = [1, 2, 3];

// answer = [[], [1], [2], [2, 3], ];
// holder = [];


// [[1], [2]].includes([1])// => false

// [1] === [1]


function subset (array) {
  let answer = [[]];
  let holder = [];


  for(let i = 0; i < array.length; i++) {
    for (let i2 = i; i2 < array.length; i2++) {
      if (i !== i2) {
        holder.push(array[i2])
      }

      if (!answer.includes(holder)) {
        answer.push(holder);
      }
    }
    holder = [];
  }

  answer.push(array);
  return answer;
}



Id: [      ]
pw: [      ]

SELECT users
from users_table
where id = ""
" AND pw = ""



let arr1 = [1, 2, 3];

console.log(subset(arr1))
// permutation [1,3,2], [2,1,3] , [3,1 ,2], [3, 2, 1]

// [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

let arr2 = [1, 2, 3, 4];
// [2, 3, 4], [1, 3, 4]

let arr3 = []
// [[]];

subset([]) // => [[]]
subset([1]) // => [[], [1]]
subset([1, 2]) // => [[], [1], [2], [1, 2]]
subset([1, 2, 3]) // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


var subsets = function (nums) {
  let result = [[]];
  if (nums.length === 0) return result;

  //   copying nums except the last element
  let nums_copy = nums.slice(0, nums.length - 1);

  //  last element in the array;
  let prevNum = nums[nums.length - 1];

  let prev = subsets(nums_copy);

  return prev.concat(prev.map((el) => el.concat(prevNum)));
};
