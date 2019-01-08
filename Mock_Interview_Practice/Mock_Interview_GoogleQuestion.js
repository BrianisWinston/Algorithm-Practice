const longestSeq = (s1, s2) => {
  let shorter;
  let longer;
  if (s1.length > s2.length) {
    shorter = s2;
    longer = s1;
  } else {
    shorter = s1;
    longer = s2;
  }
  let answer = null;
  let string = "";
  let firstPointer;
  let secondPointer;
  for(let i = 0; i < shorter.length; i++) {
    firstPointer = i;
    for(let i2 = 0; i2 < longer.length; i2++) {
      if (shorter[firstPointer] === longer[i2] && firstPointer < shorter.length) {
        string += shorter[firstPointer];
        // console.log(firstPointer)
        ++firstPointer;
      } else {
        secondPointer = firstPointer;
        while (secondPointer < shorter.length) {
          if (shorter[secondPointer] === longer[i2]) {
            string += shorter[secondPointer];
          }
          ++secondPointer;
        }
      }
    }
    if(answer === null || answer.length < string.length) {
      answer = string;
    }
    string = "";
  }
  console.log(answer);
  return answer;
}

console.log(`"ABAZDC", "BACBAD" => "ABAD" -- ${longestSeq("ABAZDC", "BACBAD") === "ABAD"}`)

console.log(`"aaaa", "aa" => "aa" -- ${longestSeq("aaaa", "aa") === "aa"}`)
