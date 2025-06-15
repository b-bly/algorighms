class Solution(object):
    def countAndSay(self, n):
        if n == 1:
            return "1"

        def get_encoded(s):
            encoded = ""
            i = 0
            while i < len(s):
                count = 1
                while i + 1 < len(s) and s[i] == s[i + 1]:
                    count += 1
                    i += 1  # You missed incrementing `i` here
                encoded += str(count) + s[i]
                i += 1
            return encoded

        result = "1"
        for _ in range(n - 1):
            result = get_encoded(result)
        return result


# Call it like this:
sol = Solution()
result = sol.countAndSay(4)
print(result)  # Output: "1211"



# expected "1211"
