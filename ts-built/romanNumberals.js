"use strict";
// solution(1000); // should return 'M'
// Help:
function solution(integer) {
    // const v = Math.floor(integer/5)
    // const i = Math.floor((integer % 5) / 1)
    // if (v > 0) { answer += 'V'}
    // if (i > 0) { answer += 'I'.repeat(i) }
    const romanDictionary = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    let answer = "";
    for (const romanNumeral in romanDictionary) {
        const divisor = romanDictionary[romanNumeral];
        if (integer > divisor) {
            const quotent = integer / divisor;
            integer -= quotent;
            answer += romanNumeral;
        }
    }
    return answer;
}
const answer = solution(17);
console.log(answer);
