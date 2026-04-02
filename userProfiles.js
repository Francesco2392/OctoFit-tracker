// userProfiles.js
// Module for managing user profiles

class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.totalSteps = 0;
        this.totalCalories = 0;
        this.workouts = []; // Array of workout objects
    }

    // Getter for total steps
    getTotalSteps() {
        return this.totalSteps;
    }

    // Setter for total steps
    setTotalSteps(steps) {
        this.totalSteps = steps;
    }

    // Getter for total calories
    getTotalCalories() {
        return this.totalCalories;
    }

    // Setter for total calories
    setTotalCalories(calories) {
        this.totalCalories = calories;
    }

    // Function to add a workout
    addWorkout(workout) {
        this.workouts.push(workout);
    }

    // Function to get user profile summary
    getProfileSummary() {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            totalSteps: this.totalSteps,
            totalCalories: this.totalCalories,
            workoutCount: this.workouts.length
        };
    }

    // Function to update progress
    updateProgress(steps, calories) {
        this.totalSteps += steps;
        this.totalCalories += calories;
    }
}

module.exports = User;