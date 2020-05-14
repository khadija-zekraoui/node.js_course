function reverseString(str, letter) {
    var index = str.indexOf(letter);
    return str
        .split(" ")
        .map((e) => (e[0] == letter ? e.split("").reverse().join("") : e))
        .join(" ");
}

console.log(reverseString("first man to walk on the moon", "m"));
