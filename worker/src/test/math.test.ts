import { describe, test, expect } from '@jest/globals';

// Mathematics tests
describe('Advanced Tests - Mathematics', () => {
  test('Large number addition', () => {
    expect(1000000000 + 2000000000).toBe(3000000000);
  });

  test('Large number multiplication', () => {
    expect(123456789 * 987654321).toBe(121932631112635269);
  });

  test('Precision decimal operations', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  test('Exponentiation', () => {
    expect(Math.pow(2, 10)).toBe(1024);
  });

  test('Square root', () => {
    expect(Math.sqrt(16)).toBe(4);
  });
});
