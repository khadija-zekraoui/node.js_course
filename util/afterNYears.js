/**
 * Given an object of people and their ages, return how old the people would be
 * after n years have passed. Use the absolute value of n.
 */

function afterNYears(names, n) {
    for (const e in names) {
        names[e] += Math.abs(n);
    }
    return names;
}

console.log(
    afterNYears(
        {
            Joel: 32,
            Fred: 44,
            Reginald: 65,
            Susan: 33,
            Julian: 13,
        },
        1
    )
);

console.log(
    afterNYears(
        {
            "Ambitious Old Scientist": 87,
            "Ambitious Scientist": 42,
            "Slightly Concerned Young Scientist": 23,
        },
        -35
    )
);

//The Math.abs() function returns the absolute value of a number
//The for/in statement loops through the properties of an object.
