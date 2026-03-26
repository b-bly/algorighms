/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var _compareVersion = function (version1, version2) {
  let left = 0
  let right = 0
  let v2Left = 0
  let v2Right = 0
  const max = Math.max(version1.length, version2.length)
  
  while(left < max) {
    while(version1[right] !== '.' && right < version1.length) {
      right++
    }
    while(version2[v2Right] !== '.' && v2Right < version2.length) {
      v2Right++
    }
    const v1 = parseInt(version1.slice(left, right))
    const v2 = parseInt(version2.slice(v2Left, v2Right))
    if (v1 < v2) return -1
    if (v2 > v1) return 1
    if (v1 === v2 && version1.length === right && version.length === v2Right) return 0

    // skip '.'
    right++
    v2Right++
    left = right
    v2Left = v2Right
  }
  return 0
}

const compareVersion = function (version1, version2) { 
  const v1 = version1.split('.').map(x => parseInt(x))
  const v2 = version2.split('.').map(x => parseInt(x))
  const minLen = Math.min(v1.length, v2.length)
  let i
  for (i = 0; i < minLen; i++) {
    const place1 = v1[i]
    const place2 = v2[i]
    if (place1 < place2) return -1
    if (place1 > place2) return 1
  }
  if (v1.length === v2.length) return 0
  else if (v1.length > v2.length) {
    while (i < v1.length) {
      const place = v1[i]
      if (place > 0) return 1
      i++
    }
  } else {
    while (i < v2.length) {
        const place = v2[i]
        if (place > 0) return -1
        i++
    }
  }
  return 0
}

let version1 = "1.2", version2 = "1.10"

// Output: -1

// Explanation:

// version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.

// Example 2:

version1 = "1.01", version2 = "1.001"

// Output: 0

// Explanation:

// Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

// Example 3:

version1 = "1.0", version2 = "1.0.0.0"

// Output: 0

const result = compareVersion(version1, version2)
console.log(result)