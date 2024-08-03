import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import fs from 'node:fs';
import path from 'node:path';

describe('File Permissions Tests', () => {
  const testFilePath = path.join(__dirname, 'testfile.txt');

  beforeAll(() => {
    fs.writeFileSync(testFilePath, 'This is a test file.');
  });

  afterAll(() => {
    fs.unlinkSync(testFilePath);
  });

  test('File should be readable', () => {
    const stats = fs.statSync(testFilePath);
    expect(stats.mode & fs.constants.R_OK).toBe(fs.constants.R_OK);
  });

  test('File should be writable', () => {
    const stats = fs.statSync(testFilePath);
    expect(stats.mode & fs.constants.W_OK).toBe(fs.constants.W_OK);
  });

  test('File should not be executable', () => {
    const stats = fs.statSync(testFilePath);
    expect(stats.mode & fs.constants.X_OK).not.toBe(fs.constants.X_OK);
  });
});
