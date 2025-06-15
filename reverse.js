const str = '&#39;abcdef&#39;'
const unicode = '&#39;'
const regex = /&#39;/g
const result = '&#39;abcdef&#39;'.replace(/&#39;/g, '').split('').reverse().join('') + '&#39;'
console.log(result)