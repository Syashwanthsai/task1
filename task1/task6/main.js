// The temperature in Kelvin will stay constant
const kelvin = 293;

// Celsius is 273 degrees less than Kelvin
let celsius = kelvin - 273;

// Fahrenheit is calculated from Celsius using the formula
let fahrenheit = celsius * (9 / 5) + 32;

// Use Math.floor() to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Print the temperature in Fahrenheit using string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra Practice: Convert Celsius to Newton scale
let newton = celsius * (33 / 100);

// Round down the Newton temperature
newton = Math.floor(newton);

// Print the temperature in Newton using string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);
