// My current age in human years
let myAge = 25;

// The first two years of a dog's life count as 10.5 dog years each
let earlyYears = 2;

// Multiply early years by 10.5 to convert to dog years
earlyYears *= 10.5;

// Subtract the first 2 years from myAge to calculate the remaining years
let laterYears = myAge - 2;

// Multiply later years by 4 to convert to dog years
laterYears *= 4;

// Check the intermediate values (optional)
console.log(`Early Years: ${earlyYears}`);
console.log(`Later Years: ${laterYears}`);

// Add earlyYears and laterYears to get total dog years
let myAgeInDogYears = earlyYears + laterYears;

// Store my name in all lowercase
let myName = "Alex".toLowerCase();

// Output the final sentence using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
