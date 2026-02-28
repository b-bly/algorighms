// // Symbol	Value
// // I	1
// // V	5
// // X	10
// // L	50
// // C	100
// // D	500
// // M	1000
// const numerals = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M',
// }
// // Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// // If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input,
// // append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral

// // If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol,
// // for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are
// // used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// /**
//  * @param {number} num
//  * @return {string}
//  */
// var intToRoman = function (num) {
//     let result = ''
//     let sNum = num.toString()
//     const _num = num
//     for (let i = 0; i < num.toString().length; i++) {
//         if (sNum[0] === '4') {
//             const one = Math.pow(10, parseInt(sNum.length - 1))
//             const five = '5' + '0'.repeat(one - 1)
//             // const one = Math.floor(_num / 10)
//             result += numerals[one.toString()] + numerals[five]
//         } else if (sNum[0] === '9') {
//             const one = Math.pow(10, parseInt(sNum.length - 1))
//             const ten = '1' + '0'.repeat(one)
//             result += numerals[one.toString()] + numerals[ten]
//         } else {
//             const val = Math.pow(10, parseInt(sNum.length - 1))
//             let _val = ''
//             if (sNum[0] === '0') {
//                 break
//             } else if (sNum[0] <= 3) {
//                 _val = '1' + '0'.repeat(val.toString().length - 1)
//                 const digit = parseInt(sNum[0])
//                 for (let i = 1; i <= digit; i++) {
//                     result += numerals[_val]
//                 }
//             } else if (sNum[0] === '5') {
//                 _val = '5' + '0'.repeat(val.toString().length - 1)
//                 result += numerals[_val]
//             } else {
//                 _val = '1' + '0'.repeat(val.toString().length - 1)
//                 const digit = parseInt(sNum[0])
//                 for (let i = 1; i <= digit; i++) {
//                     result += numerals[_val]
//                 }
//             }
//         }

//         sNum = sNum.substring(1)
//     }
//     return result
// }

const intToRoman = (num) => {
  //     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M',
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];
    let result = ''
    for (let i = 0; i < values.length; i++) {
      const value = values[i]
      const symbol = symbols[i]
      while(num >= value) {
        result += symbol
        num -= value
      }
    }
    return result
  }

// Example 1:

let num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII
// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV

// num = 52
const result = intToRoman(num)
console.log(result)
