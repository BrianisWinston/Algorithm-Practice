function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let svowels = [];
    let sconsonants = [];
    s.split('').forEach(function(char) {
      if (vowels.includes(char)) {
          svowels.push(char);
      }  else {
          sconsonants.push(char);
      }
    })
    svowels.map(char => console.log(char));
    sconsonants.map(char => console.log(char));
}
