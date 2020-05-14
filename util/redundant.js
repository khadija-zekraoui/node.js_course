/**
 * Write a function redundant that takes in a string str and returns
 * a function that returns str.
 */

function redundant(str) {
    return () => str;
}

console.log(redundant("appel")());
