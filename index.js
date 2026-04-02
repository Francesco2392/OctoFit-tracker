// index.js
// Main application logic for OctoFit-tracker

const FitnessTracker = require('./fitnessTracker');
const Leaderboard = require('./leaderboard');
const User = require('./userProfiles');

// Initialize components
const tracker = new FitnessTracker();
const leaderboard = new Leaderboard();

// Example users
const user1 = new User(1, 'Alice', 25);
const user2 = new User(2, 'Bob', 30);

// Simulate tracking activities
tracker.trackStepsAndCalories(5000, 200);
tracker.trackStepsAndCalories(3000, 150); // Another entry for today

user1.updateProgress(5000, 200);
user2.updateProgress(7000, 300);

// Update leaderboard
leaderboard.updateUser(user1.id, user1.getTotalSteps(), user1.getTotalCalories());
leaderboard.updateUser(user2.id, user2.getTotalSteps(), user2.getTotalCalories());

// Display results
console.log('Weekly Averages:', tracker.getWeeklyAverages());
console.log('Leaderboard by Steps:', leaderboard.getLeaderboardBySteps());
console.log('User Profiles:');
console.log(user1.getProfileSummary());
console.log(user2.getProfileSummary());