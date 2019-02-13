Array.prototype.permutations = function () {
  if (this.length <= 1) return [this];

  let perms = this.slice(0, this.length - 1).permutations();
  let totalPerms = [];
  let last = this[this.length - 1];
  perms.forEach( el => {
    for (let i = 0; i <= el.length; i++) {
      let firstHalf = el.slice(0, i);
      let secondHalf = el.slice(i, el.length);
      totalPerms.push(firstHalf.concat(last, secondHalf));
    }
  })
  return totalPerms;
};

console.log([1,2,3].permutations());
