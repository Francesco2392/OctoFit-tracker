// __tests__/fitnessTracker.test.js
const FitnessTracker = require('../fitnessTracker');

describe('FitnessTracker', () => {
    let tracker;

    beforeEach(() => {
        tracker = new FitnessTracker();
    });

    test('should track steps and calories for a new day', () => {
        tracker.trackStepsAndCalories(5000, 200);
        const dailyTotal = tracker.getDailyTotal(new Date().toISOString().split('T')[0]);
        expect(dailyTotal.steps).toBe(5000);
        expect(dailyTotal.calories).toBe(200);
    });

    test('should accumulate steps and calories for the same day', () => {
        tracker.trackStepsAndCalories(3000, 100);
        tracker.trackStepsAndCalories(2000, 100);
        const dailyTotal = tracker.getDailyTotal(new Date().toISOString().split('T')[0]);
        expect(dailyTotal.steps).toBe(5000);
        expect(dailyTotal.calories).toBe(200);
    });

    test('should calculate weekly averages', () => {
        // Mock dates for testing
        const mockDate = new Date('2023-10-01');
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

        tracker.trackStepsAndCalories(5000, 200);
        tracker.trackStepsAndCalories(6000, 250); // Simulate another day

        const averages = tracker.getWeeklyAverages();
        expect(averages.averageSteps).toBeGreaterThan(0);
        expect(averages.averageCalories).toBeGreaterThan(0);

        global.Date.mockRestore();
    });
});