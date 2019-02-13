Array.prototype.permutations = function() {
  if (this.length <= 1) return [this];
  debugger
  let perms = this.slice(0, this.length - 1).permutations();
  let totalPerms = [];
  let last = [this[this.length - 1]];
  for (let arr of perms) {
    for (let i = 0; i <= arr.length; i++) {
      let firstHalf = arr.slice(0,i);
      let secondHalf = arr.slice(i, arr.length);
      totalPerms.push(firstHalf.concat(last, secondHalf))
    }
  }
  return totalPerms;
}

console.log([1,2,3].permutations());
