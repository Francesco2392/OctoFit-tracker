// __tests__/userProfiles.test.js
const User = require('../userProfiles');

describe('User', () => {
    let user;

    beforeEach(() => {
        user = new User(1, 'Alice', 25);
    });

    test('should create a user with correct attributes', () => {
        expect(user.id).toBe(1);
        expect(user.name).toBe('Alice');
        expect(user.age).toBe(25);
        expect(user.getTotalSteps()).toBe(0);
        expect(user.getTotalCalories()).toBe(0);
    });

    test('should update total steps', () => {
        user.setTotalSteps(5000);
        expect(user.getTotalSteps()).toBe(5000);
    });

    test('should update total calories', () => {
        user.setTotalCalories(200);
        expect(user.getTotalCalories()).toBe(200);
    });

    test('should update progress', () => {
        user.updateProgress(3000, 150);
        expect(user.getTotalSteps()).toBe(3000);
        expect(user.getTotalCalories()).toBe(150);
    });

    test('should add workouts', () => {
        const workout = { type: 'running', duration: 30 };
        user.addWorkout(workout);
        expect(user.workouts.length).toBe(1);
        expect(user.workouts[0]).toEqual(workout);
    });

    test('should get profile summary', () => {
        user.updateProgress(5000, 200);
        const summary = user.getProfileSummary();
        expect(summary).toEqual({
            id: 1,
            name: 'Alice',
            age: 25,
            totalSteps: 5000,
            totalCalories: 200,
            workoutCount: 0
        });
    });
});