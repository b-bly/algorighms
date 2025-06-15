

const target = new Map()
const handler = {
  get(target, prop, receiver) {
    let value = Reflect.get(target, prop, receiver);
    return typeof value === 'function' ? value.bind(target) : value;
  },

    // set: function (target, prop, value) {
    //     target.set(prop, value)
    //     return true
    // },
    has: function (target, prop) {
        target.has(prop)
        return true
    },

    deleteProperty: function (target, prop) {
        target.delete(prop)
        return true
    },
}
const proxy = new Proxy(target, handler)

proxy.set('key', 'value')
// target.set('key', 'value')
// console.log(target)

const nums = [1, 2, 3];
const largest = Math.max.apply(null, nums, [4, 5]);

console.log(largest);  // 