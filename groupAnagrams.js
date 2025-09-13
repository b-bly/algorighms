/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const results = []
    while (strs.length > 0) {
        const candidate = strs.pop()
        const result = [candidate]
        let anList = []
        for (let i = strs.length - 1; i >= 0; i--) {
            const word = strs[i]
            if (isAnagram(word, candidate)) {
                strs.splice(i, 1)
                anList.push(word)
            }
        }
        // how to handle the same word (not rearanged)
        results.push(result.concat(anList))
    }
    function isAnagram(word, candidate) {
        if (word.length !== candidate.length) {
            return false
        }
        for (let i = 0; i < word.length; i++) {
            const letter = word[i]
            if (candidate.includes(letter)) {
                candidate = candidate.replace(letter, '')
                // word = word.slice(1)
            } else {
                return false
            }
        }
        return true
    }
    return results
}

// const example = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// const example = ['', '']
// const result = groupAnagrams(example)
// console.log(result)

// chatGPT

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const _groupAnagrams = function (strs) {
    const dictionary = {}
    for (const word of strs) {
        const key = word.split('').sort().join('')
        if (!dictionary[key]) {
            dictionary[key] = []
        }
        dictionary[key].push(word)
    }
    let result = []
    for (const key in dictionary) {
        result.push(dictionary[key])
    }
    return result
}

const example = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// const example = ['', '']
const result = _groupAnagrams(example)
console.log(result)