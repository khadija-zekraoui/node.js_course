/**
 * Create a function which returns the number of true values there are in an array.
 * countTrue([true, false, false, true, false]) ➞ 2
 * countTrue([false, false, false, false]) ➞ 0
 * countTrue([]) ➞ 0
 */

// my solution
function countTrue(arr) {
    return arr.filter((e) => e == true).length;
}
console.log("countTrue", countTrue([true, false, false, true, false]));

const countTrue2 = (arr) => arr.filter(Boolean).length;
console.log("countTrue2", countTrue2([true, false, false, true, false]));

/**
 * Boolean it is a function, and functions are just objects, that you can pass around.
 * It is the same as: return arry.filter(function(x){return Boolean(x)}).length;
 *  Since function(x){return f(x)} === f then you can simplify:
 * return arry.filter(Boolean).length;
 */
