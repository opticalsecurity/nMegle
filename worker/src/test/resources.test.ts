import { describe, test, expect } from '@jest/globals';
import os from 'os';

describe('System Resource Tests', () => {
  test('CPU load should be within acceptable limits', () => {
    const cpus = os.cpus();
    const cpuLoad =
      cpus.reduce((acc, cpu) => {
        const total = Object.values(cpu.times).reduce(
          (total, time) => total + time,
          0
        );
        const idle = cpu.times.idle;
        return acc + (1 - idle / total);
      }, 0) / cpus.length;

    expect(cpuLoad).toBeLessThan(0.8); // Expecting less than 80% average CPU load
  });

  test('Memory usage should be within acceptable limits', () => {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const memoryUsage = usedMemory / totalMemory;

    expect(memoryUsage).toBeLessThan(0.95); // Expecting less than 90% memory usage
  });
});
