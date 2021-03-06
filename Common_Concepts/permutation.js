Array.prototype.permutations = function () {
  if (this.length == 1) return [this];

  let perms = this.slice(0, this.length - 1).permutations();
  let lastNum = this[this.length - 1];
  let totalPerms = [];

  perms.forEach( perm => {
    for (let i = 0; i <= perm.length; i++) {
      let firstHalf = perm.slice(0, i);
      let secondHalf = perm.slice(i);
      totalPerms.push(firstHalf.concat([lastNum], secondHalf));
    }
  })
  return totalPerms;
};

// Array.prototype.permutations = function () {
//   if (this.length == 1) return [this];
//
//   let perms = this.slice(1).permutations();
//   let first = [this[0]];
//   let totalPerms = [];
//   for (let perm of perms) {
//     for (let i = 0; i <= perm.length; i++) {
//       let firstHalf = perm.slice(0, i);
//       let secondHalf = perm.slice(i);
//       totalPerms.push(firstHalf.concat(first, secondHalf));
//     }
//   }
//
//   return totalPerms;
// };

console.log([1,2,3].permutations());
