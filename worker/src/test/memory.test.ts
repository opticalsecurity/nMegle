import { describe, test, expect, beforeEach, afterEach } from '@jest/globals';

// Memory management tests
describe('Advanced Tests - Memory Management', () => {
  let array: number[];

  beforeEach(() => {
    array = new Array(1000000); // Creating a large array to simulate memory usage
  });

  afterEach(() => {
    array = []; // Clearing the array after each test
  });

  test('Memory allocation and deallocation', () => {
    expect(array.length).toBe(1000000); // Verifying the array was created correctly
  });

  test('Memory usage within limits', () => {
    const memoryUsage = process.memoryUsage();
    expect(memoryUsage.heapUsed).toBeLessThan(100000000); // Verifying heap usage is less than 100MB
  });
});
