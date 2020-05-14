/**
 * Given a number, return a string of the word "Boom", which varies in the following ways:
 * The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
 * If n is evenly divisible by 2, add an exclamation mark to the end.
 * If n is evenly divisible by 5, return the string in ALL CAPS.
 * If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
 */

const boomIntensity = (n) => {
    if (n < 2) return "boom";
    const boom = "B" + "o".repeat(n) + "m" + (!(n % 2) ? "!" : "");
    return !(n % 5) ? boom.toUpperCase() : boom;
};

console.log(boomIntensity(0));
console.log(boomIntensity(1));
console.log(boomIntensity(2));
console.log(boomIntensity(3));
console.log(boomIntensity(4));
console.log(boomIntensity(5));
console.log(boomIntensity(6));
console.log(boomIntensity(7));
console.log(boomIntensity(8));
console.log(boomIntensity(9));
console.log(boomIntensity(10));

/**
 * The repeat() method constructs and returns a new string which contains
 * the specified number of copies of the string on which it was called, concatenated together.
 */
