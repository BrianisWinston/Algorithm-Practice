function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minChanges = 0;
  let maxChanges = 0;
  for ( let i = 1 ; i < scores.length ; i++ ) {
      if (scores[i] < min) {
          min = scores[i];
          minChanges++;
      } else if (scores[i] > max) {
          max = scores[i];
          maxChanges++
      }
  }
  return [maxChanges, minChanges];
}
