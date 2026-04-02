// fitnessTracker.js
// Module for tracking fitness activities

class FitnessTracker {
    constructor() {
        this.activities = [];
    }

    // Function to track daily steps and calories burned
    trackStepsAndCalories(steps, calories) {
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        const existingEntry = this.activities.find(entry => entry.date === today);

        if (existingEntry) {
            existingEntry.steps += steps;
            existingEntry.calories += calories;
        } else {
            this.activities.push({
                date: today,
                steps: steps,
                calories: calories
            });
        }
    }

    // Function to get weekly averages
    getWeeklyAverages() {
        const now = new Date();
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const weekActivities = this.activities.filter(entry => new Date(entry.date) >= weekAgo);

        const totalSteps = weekActivities.reduce((sum, entry) => sum + entry.steps, 0);
        const totalCalories = weekActivities.reduce((sum, entry) => sum + entry.calories, 0);
        const days = weekActivities.length;

        return {
            averageSteps: days > 0 ? totalSteps / days : 0,
            averageCalories: days > 0 ? totalCalories / days : 0
        };
    }

    // Function to get total steps and calories for a specific date
    getDailyTotal(date) {
        const entry = this.activities.find(entry => entry.date === date);
        return entry ? { steps: entry.steps, calories: entry.calories } : { steps: 0, calories: 0 };
    }
}

module.exports = FitnessTracker;