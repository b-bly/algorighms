function meeting(x, need) {
  if (need === 0) {
    return "Game On";
  }

  let acc = 0;
  let i = 0;
  let chairsArr = [];

  for (let room of x) {
    const occupants = room[0].length;
    const chairs = room[1];
    const diff = chairs - occupants;
    const spareChairs = diff > 0 ? diff : 0;

    // Just take the chairs needed from this room
    for (let j = 1; j <= spareChairs; j++) {
      acc += 1;
      if (acc >= need) {
        // add chairs needed from this room
        chairsArr.push(j);
        return chairsArr;
      }
    }
    chairsArr.push(spareChairs);
    i++;
  }
  return "Not enough!";
}

let result = meeting(
    [ [ 'XXX', 3 ], [ 'XXXXX', 6 ], [ 'XXXXXX', 9 ] ],
  4
);

console.log(result);
