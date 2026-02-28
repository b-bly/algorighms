var simplifyPath = function (path) {
    const stack = []
    const parts = path.split('/')

    for (const part of parts) {
        if (part === '' || part === '.') {
            continue
        } else if (part === '..') {
            if (stack.length > 0) {
                stack.pop()
            }
        } else {
            stack.push(part)
        }
    }

    return '/' + stack.join('/')
}

// Example 1:

// const path = "/home/"
// let result = simplifyPath(path);

// Output: "/home"

// Explanation:

// The trailing slash should be removed.

// Example 2:

// const path = "/home//foo/"
// const result = simplifyPath(path)
// Output: "/home/foo"

// Explanation:

// Multiple consecutive slashes are replaced by a single one.

// Example 3:

// const path = "/home/user/Documents/../Pictures"
// let result = simplifyPath(path)
// Output: "/home/user/Pictures"

// Explanation:

// A double period ".." refers to the directory up a level (the parent directory).

// Example 4:

// const path = "/../"
// const result = simplifyPath(path)
// Output: "/"

// Example 5:

// const path = "/.../a/../b/c/../d/./"
// Output: "/.../b/d"

const path = '/a/./b/../../c/'

// Use Testcase
// Output
// "/a/c"
// Expected
// "/c"

const result = simplifyPath(path)
console.log(result)
