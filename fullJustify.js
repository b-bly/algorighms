/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    class Pad {
        constructor(words, maxWidth) {
            this.words = words
            this.maxWidth = maxWidth
            this.paragraph = []
        }

        minLengthOfLine(line) {
            // Don't need spaces for one word
            if (line.length === 1) {
                return this.words[0].length + line.join('').length
            }
            // length of next word + length of chars + need at least 1 space per word
            return this.words[0].length + line.join('').length + line.length
        }

        getLine() {
            let line = []
            // if there is another word
            // and adding next word doesn't overshoot maxWidth
            while (this.words.length > 0 && this.minLengthOfLine(line) <= this.maxWidth) {
                const nextWord = this.words.shift()
                line.push(nextWord)
                if (line.join('').length === this.maxWidth) {
                    break
                }
            }
            return line
        }

        getPadding(line) {
            const { maxWidth } = this
            const chars = line.join('').length
            const paddingSlots = line.length === 1 ? 1 : line.length - 1
            const padding = Math.floor((maxWidth - chars) / paddingSlots)
            const remainder = (maxWidth - chars) % paddingSlots
            return { padding, remainder }
        }

        padLineLeftJustified(line) {
            if (line.length === 1) {
                line[0] = line[0] + ' '.repeat(this.maxWidth - line[0].length)
            } else {
                line = line.map((word, i) => {
                    if (i === word.length - 1) {
                        const padding = this.maxWidth - (line.join('').length + 1)
                        word += ' '.repeat(padding)
                    } else {
                        word += ' '
                    }
                    return word
                })
            }
            return line
        }

        padLineCenterJustified(line, padding, remainder) {
            // let _maxWidth = this.maxWidth - line.join('').length

            if (line.length === 1) {
                line[0] = line[0] + ' '.repeat(padding)
            } else {
                if (padding > 0) {
                    line = line.map((word, i) => {
                        // don't padd last word unless there's only one in the line
                        if (i === line.length - 1) {
                            return word
                        }
                        word += ' '.repeat(padding)
                        // _maxWidth -= padding
                        return word
                    })
                }
                line = line.map((word) => {
                    if (remainder > 0) {
                        word += ' '
                    }
                    remainder--
                    return word
                })
            }
            return line
        }

        padParagraph() {
            while (this.words.length > 0) {
                let line = this.getLine()
                const { padding, remainder } = this.getPadding(line)
                if (words.length === 0) {
                    line = this.padLineLeftJustified(line)
                } else {
                    line = this.padLineCenterJustified(line, padding, remainder)
                }
                this.paragraph.push(line.join(''))
            }
        }

        getParagraph() {
            return this.paragraph
        }
    }
    const pad = new Pad(words, maxWidth)
    pad.padParagraph()
    const par = pad.getParagraph()
    return par
}

// Example 1:

let words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
    maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Example 2:

;(words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be']), (maxWidth = 16)
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.
// Example 3:

// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

//     ('Science  is  what we',
//     'understand      well',
//     'enough to explain to',
//     'a  computer.  Art is',
//     'everything  else  we',
//     'do                  ')
// ]

words = [
    'Science',
    'is',
    'what',
    'we',
    'understand',
    'well',
    'enough',
    'to',
    'explain',
    'to',
    'a',
    'computer.',
    'Art',
    'is',
    'everything',
    'else',
    'we',
    'do',
]
maxWidth = 20

// ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"]
// maxWidth =
// 16

// Use Testcase
// Output
// ["ask   not   what","your country can","do  for  you ask","what  you can do","for your country "]
// Expected
// ["ask   not   what","your country can","do  for  you ask","what  you can do","for your country"]

let result = fullJustify(words, maxWidth)
console.log(result)
