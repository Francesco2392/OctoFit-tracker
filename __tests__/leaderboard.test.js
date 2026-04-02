// __tests__/leaderboard.test.js
const Leaderboard = require('../leaderboard');

describe('Leaderboard', () => {
    let leaderboard;

    beforeEach(() => {
        leaderboard = new Leaderboard();
    });

    test('should update user data', () => {
        leaderboard.updateUser(1, 5000, 200);
        const lb = leaderboard.getLeaderboardBySteps();
        expect(lb[0]).toEqual({ id: 1, totalSteps: 5000, totalCalories: 200 });
    });

    test('should sort leaderboard by steps descending', () => {
        leaderboard.updateUser(1, 5000, 200);
        leaderboard.updateUser(2, 7000, 300);
        leaderboard.updateUser(3, 4000, 150);
        const lb = leaderboard.getLeaderboardBySteps();
        expect(lb[0].id).toBe(2);
        expect(lb[1].id).toBe(1);
        expect(lb[2].id).toBe(3);
    });

    test('should sort leaderboard by calories descending', () => {
        leaderboard.updateUser(1, 5000, 200);
        leaderboard.updateUser(2, 6000, 300);
        const lb = leaderboard.getLeaderboardByCalories();
        expect(lb[0].id).toBe(2);
        expect(lb[1].id).toBe(1);
    });

    test('should get daily leaderboard', () => {
        const dailyData = [
            { userId: 1, steps: 5000, calories: 200 },
            { userId: 2, steps: 7000, calories: 300 }
        ];
        const lb = leaderboard.getDailyLeaderboard(dailyData);
        expect(lb[0].userId).toBe(2);
        expect(lb[1].userId).toBe(1);
    });
});