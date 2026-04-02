// leaderboard.js
// Module for managing leaderboards

class Leaderboard {
    constructor() {
        this.users = [];
    }

    // Function to add or update user data
    updateUser(userId, totalSteps, totalCalories) {
        const existingUser = this.users.find(user => user.id === userId);
        if (existingUser) {
            existingUser.totalSteps = totalSteps;
            existingUser.totalCalories = totalCalories;
        } else {
            this.users.push({
                id: userId,
                totalSteps: totalSteps,
                totalCalories: totalCalories
            });
        }
    }

    // Function to display leaderboard sorted by total steps
    getLeaderboardBySteps() {
        return this.users.sort((a, b) => b.totalSteps - a.totalSteps);
    }

    // Function to display leaderboard sorted by total calories
    getLeaderboardByCalories() {
        return this.users.sort((a, b) => b.totalCalories - a.totalCalories);
    }

    // Function to get daily leaderboard (assuming daily data is passed)
    getDailyLeaderboard(dailyData) {
        // dailyData should be an array of {userId, steps, calories}
        return dailyData.sort((a, b) => b.steps - a.steps);
    }

    // Function to add weekly challenges
    addWeeklyChallenge(challengeName, criteria) {
        // This could be expanded to track challenges
        console.log(`Challenge "${challengeName}" added with criteria: ${criteria}`);
    }
}

module.exports = Leaderboard;