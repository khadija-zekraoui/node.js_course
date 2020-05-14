/**
 * Create a function that takes a string and censors words over four characters with *.
 * Don't censor words with exactly four characters.
 * If all words have four characters or less, return the original string.
 * The amount of * is the same as the length of the word.
 * */

function censor(str) {
    return str
        .split(" ")
        .map((e) => (e.length > 4 ? e.replace(/(\w+)/, "*".repeat(e.length)) : e))
        .join(" ");
}

//const censor = str => str.replace(/\w{5,}/g, v => '*'.repeat(v.length));

console.log(censor("The code is fourty")); // "The code is ******"
console.log(censor("Two plus three is five"));
console.log(censor("aaaa aaaaa 1234 12345"));
