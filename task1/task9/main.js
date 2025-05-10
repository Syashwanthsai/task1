// Step 1: Random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Step 2: Runner registration time (true if early, false if late)
let registeredEarly = true;

// Step 3: Runner's age
let runnerAge = 18;

// Step 4: Add 1000 if adult and registered early
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Step 5-9: Determine race time based on age and registration
if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner #${raceNumber} will race at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Runner #${raceNumber} will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Runner #${raceNumber} will race at 12:30 pm.`);
} else {
  console.log(`Runner #${raceNumber} is exactly 18. Please see the registration desk.`);
}
