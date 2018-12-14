import { validate_bet } from './bet-validation';

describe('validate_bet', () => {
    test("validate bet '1 2 3 4 5' should return [1, 2, 3, 4, 5]", () => {
        expect(validate_bet([5, 90], "1 2 3 4 5").join(',')).toBe('1,2,3,4,5');
    });

    test("validate bet '5 , 3, 1  4,2' should return [1, 2, 3, 4, 5]", () => {
        expect(validate_bet([5, 90], "5 , 3, 1  4,2").join(',')).toBe('1,2,3,4,5');
    });

    test("validate bet '1, 2; 3, 4, 5' should return None", () => {
        expect(validate_bet([5, 90], "1, 2; 3, 4, 5")).toBe('None');
    });

    test("validate bet '1, 2, 3, 4' should return None", () => {
        expect(validate_bet([5, 90], "1, 2, 3, 4")).toBe('None');
    });

    test("validate bet '1, 2, 3, 4, 95' should return None", () => {
        expect(validate_bet([5, 90], "1, 2, 3, 4, 95")).toBe('None');
    });
});
