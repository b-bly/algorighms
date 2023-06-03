function compareFn(a, b) {
  const aTotal = a[0] + a[1] + a[2];
  const bTotal = b[0] + b[1] + b[2];
  if (aTotal < bTotal) {
    return 1;
  }
  if (aTotal > bTotal) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function boxesPacking(lengths, widths, heights) {
//   console.log(lengths);
//   console.log(widths);
  if (lengths.length !== widths.length) {
    throw new Error("I assumed the arrays would have the same lengths");
  }
  const boxes = lengths.map((length, i) => {
    return [length, widths[i], heights[i]].sort((a, b) => b-a);
  });
    // console.log(boxes)
  const sortedBoxes = boxes.sort(compareFn);
    console.log(sortedBoxes)
  const canFit = sortedBoxes.reduce((acc, box, i, arr) => {
    if (i === lengths.length - 1) {
      return acc;
    }
    if (acc === false) {
    //   console.log(arr[i - 1]);
    //   console.log(box)
      return false
    }
    const lengthA = box[0];
    const lengthB = arr[i + 1][0];
    const widthA = box[1];
    const widthB = arr[i + 1][1];
    const heightA = box[2];
    const heightB = arr[i + 1][2];
    // console.log(arr[i][0])
    // console.log(a)
    // console.log(b)
    const result =
      acc === true && lengthA > lengthB && widthA > widthB && heightA > heightB;
    // console.log(result)
    return result;
  }, true);
  //   console.log(boxes)
  return canFit;
}

const result = boxesPacking([5, 7, 4, 1, 2], [4, 10, 3, 1, 4], [6, 5, 5, 1, 2]);
console.log(result);
// console.log([ 10, 5, 7 ].sort((a, b) => a - b))

//   For length = [1, 3, 2], width = [1, 3, 2] and height = [1, 3, 2], the output should be true;

// For length = [1, 1], width = [1, 1] and height = [1, 1], the output should be false;

// For length = [3, 1, 2], width = [3, 1, 2] and height = [3, 2, 1], the output should be false.
