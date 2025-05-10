// Step 1: Define a variable for the user's name
let userName = "";

// Step 2: Use a ternary expression to greet the user
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Step 3: Define the user's question
let userQuestion = "Will I get an A in my exam?";
console.log(`${userName ? userName : 'User'} asked: "${userQuestion}"`);

// Step 4: Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Step 5: Define an empty variable to hold the eight ball's answer
let eightBall = "";

// Step 6: Use a switch statement to assign a response
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Error: something went wrong.";
}

// Step 7: Print the Magic Eight Ball's answer
console.log(`The Magic Eight Ball says: ${eightBall}`);
