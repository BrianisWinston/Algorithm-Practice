Array.prototype.permutations = function() {
  if (this.length === 0) return [[]];

  let perms = this.slice(0, this.length - 1).permutations();
  let lastNum = [this[this.length - 1]];
  let totalPerms = [];

  perms.forEach( el => {
    for (let i = 0; i <= el.length; i++) {
      let firstHalf = el.slice(0, i);
      let secondHalf = el.slice(i);
      totalPerms.push(firstHalf.concat(lastNum, secondHalf));
    }
  })

  return totalPerms;
}

console.log([1,2,3].permutations());
