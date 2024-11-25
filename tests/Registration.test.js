const { validatePasswords } = require('../public/script');

describe('validatePasswords function', () => {
    test('should return "Passwords do not match." for mismatched passwords', () => {
        const result = validatePasswords('password123', 'wrongpassword');
        expect(result).toEqual({
            message: "Passwords do not match.",
            success: false,
        });
    });

    test('should return "Registration successful!" for matching passwords', () => {
        const result = validatePasswords('password123', 'password123');
        expect(result).toEqual({
            message: "Registration successful!",
            success: true,
        });
    });
});
