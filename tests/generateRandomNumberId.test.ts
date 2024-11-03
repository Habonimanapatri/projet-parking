import { generateRandomNumberId } from '../src/utils/generateRandomNumberId';

test('should generate a 6 digit number', () => {
    const id = generateRandomNumberId();
    expect(id).toBeGreaterThanOrEqual(100000);
    expect(id).toBeLessThanOrEqual(999999);
});