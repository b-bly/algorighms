import math


class Solution(object):
    def isPalindrome(self, x):
        string = str(x)
        length = int(math.floor(len(string) / 2))
        for n in range(length):
            if string[n] != string[len(string) - n - 1]:
                return False
        return True


x = 121
# output true
result = Solution.isPalindrome(Solution, x)
print(result)

# function isPalendrome(str) {
#     var len = Math.floor(str.length / 2)
#     for (var i=0
#          i < len
#          i++) if (str[i] !== str[str.length - i - 1]) return false
#     return true
# }
