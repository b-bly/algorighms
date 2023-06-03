 function solution(number: number): string {

  interface stringDictionary {
    [key: string]: string;
  }
    const romanDictionary: stringDictionary = {
      '1000': 'M',
      '500': 'D',
      '100': 'C',
      '50': 'L',
      '10': 'X',
      '5': 'V',
      '1': 'I',
    };

    console.log(number)
    let answer = "";
    [1000, 100, 10, 1].forEach(divisor => {
      if (number >= (divisor)) {
        const quotient = Math.floor(number / divisor)
        const onesChar = romanDictionary[divisor.toString()]
        const fivesChar = romanDictionary[(divisor * 5).toString()]
        const tensChar = romanDictionary[(divisor * 10).toString()]
        if (quotient <= 3) {
          answer += onesChar.repeat(quotient)
        } else if (quotient === 4) {
          answer += onesChar + fivesChar
        } else if (quotient === 5) {
          answer += fivesChar
        } else if (quotient < 9) {
          answer += fivesChar + onesChar.repeat(quotient - 5)
        } else if (quotient === 9) {
          answer += onesChar + tensChar
        } else {
          throw new Error('Did not expect a quotient higher than 9...')
        }
        number -= divisor * quotient
      }
      
    })
    return answer;
  }

const answer = solution(1000); //MCDXLIV
console.log(answer);
