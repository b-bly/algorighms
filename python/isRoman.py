import re

roman = {
    "I": 1,
    "V":             5,
    "X":             10,
    "L":             50,
    "C":             100,
    "D":             500,
    "M":             1000
}

class Solution(object):
    def romanToInt(self, s):
      ones = ["I", "X", "C", "M"]
      fives = ["V", "l", "D"]
      # fiveModifier = ones[i]
      
      # check for fives
      i = 0
      result = 0
      for five in fives:
        multiplier = 1
        if i > 0:
          multiplier = 10 * i
        numFives = s.count(five)
        
        if numFives > 0:
          
      # for each five, check for modifiers (IV etc);
      
      rf"{re.escape(variable)}"

          modifiers = s.count(ones[i])
          if modifiers:
            result += 4 * multiplier
          else:
            result += 5 * multiplier
        else:
          # ones
          numOnes = s.count(ones[i])
        i += 1

      # if !five, check for that decimal place in ones
      # Check for M
      
s = "MCMXCIV"
result = romanToInt(Solution, s)
print(result)

# Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
