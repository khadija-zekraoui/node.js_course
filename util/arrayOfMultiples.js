/** Array.from()
 * Create a function that takes two numbers as arguments (num, length) and
 * returns an array of multiples of num up to length.
 * arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 */

function arrayOfMultiples(num, length) {
    /*var arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(num * (i + 1));
    }
    return arr;*/

    return Array.from({ length: length }, (_, i) => num * (i + 1));
}

console.log(arrayOfMultiples(7, 5));
