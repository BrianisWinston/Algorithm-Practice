// Shortest Distance Between Nodes
// Write a method, shortestDistance, that takes in a root node and two node values. This method should return the shortest distance between these two nodes.
// Example:
//       5
//     /   \
//    2     7
//   / \   / \
//  1  4  6   11
//    /         \
//   3          15
//             /
//            13
//
// shortestDistance(rootNode, 2, 7)
// Output: 2
//
// shortestDistance(rootNode, 4, 6)
// Output: 4
//
// shortestDistance(rootNode, 1, 2)
// Output: 1
//
// shortestDistance(rootNode, 7, 7)
// Output: 0

//
// Psuedo ----
// Create array to hold the values with depths
// Create queue and put root node in with depth
// Create a variable that holds answer value
//
// Create a loop that continues until length is 0
// 	Shift first value
// 	Check if it is equal to left or right
// 	Put in values with depth array
// 	Push in its left and right values
// Loop ends
// Subtract if values are less than root node
// Return answer

const shortestDistance = (root, value1, value2) => {
	let queue = [[root, 0]];
	let answer;
	let values = [];
	while (queue.length !== 0 || values.length === 2) { // [5,0]
		let shifted = queue.shift; // [5,0]
		if (shifted[0].value === value1 || shifted[0].value === value2) {
			values.push(shifted);
		}
	  queue.push([shifted.left, shifted[1] += 1]); //[2, 1]
	  queue.push([shifted.right, shifted[1] += 1]) // [[2,1],[7,1]]
	}
	if (values[0][0].value > root.value && values[1][0].value > root.value) {
    answer = Math.abs(values[0][1] - values[1][1])
  } else if ( values[0][0].value < root.value && values[1][0].value < root.value ) {
	   answer = Math.abs(values[0][1] - values[1][1])
  } else {
	   answer = values[0][1] + values[1][1] //[[2, 1],[7,1]]
  }
	return answer;
}

// Info:
// In every scenario, you may assume that the values we are searching for exist in the tree
// The function will take two values of nodes. Not the nodes themselves. (i.e., findShortestDistance(rootNode, 4, 11))
// The method should operate in O(log(n)) time complexity and O(1) space complexity.
//
// function shortestDistance(rootNode, firstVal, secondVal) {
//   const ancestor = leastCommonAncestor(rootNode, firstVal, secondVal);
//   const dist1 = findDepth(ancestor, firstVal);
//   const dist2 = findDepth(ancestor, secondVal);
//
//   return dist1 + dist2;
// }
//
// function leastCommonAncestor(rootNode, firstVal, secondVal) {
//   if (firstVal > rootNode.value && secondVal > rootNode.value) {
//     return leastCommonAncestor(rootNode.right, firstVal, secondVal);
//   } else if (firstVal < rootNode.value && secondVal < rootNode.value) {
//     return leastCommonAncestor(rootNode.left, firstVal, secondVal);
//   } else {
//     return rootNode;
//   }
// };
//
// function findDepth(root, value) {
//   if (root.value === value)
//     return 0;
//   else if (root.value > value)
//     return 1 + findDepth(root.left, value);
//   else
//     return 1 + findDepth(root.right, value);
// };
