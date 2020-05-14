/**
 * Create a function that transforms a string of upvote counts into an array of
 * numbers. Each k represents a thousand.
 */

//my solution
/*function transformUpvotes(str) {
    return str.split(" ").map((e) => {
        if (e.endsWith("k")) {
            return e.replace("k", "00") * 1000;
        } else return parseInt(e);
    });
}*/

function transformUpvotes(str) {
    return str.split(" ").map((a) => (a.endsWith("k") ? parseFloat(a) * 1000 : parseInt(a)));
}

console.log(transformUpvotes("6.8k 13.5k")); //[6800, 13500]
console.log(transformUpvotes("5.5k 8.9k 32")); //[5500, 8900, 32]
console.log(transformUpvotes("20.3k 3.8k 7.7k 992")); //[20300, 3800, 7700, 992]

/**
 * The endsWith() method determines whether a string ends with the characters of
 * a specified string, returning true or false as appropriate.
 *
 * The replace() method searches a string for a specified value, or a regular expression,
 * and returns a new string where the specified values are replaced.
 */
