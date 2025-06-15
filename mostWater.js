/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = function (heights) {
  let max = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const lowerHeight = Math.min(heights[left], heights[right])
    const area = lowerHeight * (right - left);
    if (area > max) {
      max = area;
    }
    if (heights[left] < heights[right]) {
      left ++
      continue;
    }
    right --
  }
  return max
}


const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const result = maxArea(height);
console.log(result);
// Output: 49


// var maxArea = function (heights) {
//     // calculate all possible areas
//     let max = 0
//     heights.forEach((height, i) => {
//         heights.forEach((secondHeight, j) => {
//             if (i != j) {
//                 const lowerHeight = height <= secondHeight ? height : secondHeight
//                 let width = i - j
//                 if (width < 0) {
//                     width *= -1
//                 }
//                 const area = lowerHeight * width
//                 if (area > max) {
//                     max = area
//                 }
//             }
//         })
//     })
//     return max
// }