/**
 * Create a function that keeps only strings with repeating identical
 * characters (in other words, it has a set size of 1).
 * identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) ➞ ["aaaaaa", "d", "eeee"]
 */
function identicalFilter(arr) {
    return arr.filter((e) => e.split("").every((char) => char === e[0]));
    //return arr.filter((str) => new Set(str).size === 1)
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
