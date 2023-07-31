// Test script for src/sample.ts

import sample from '../src/sample';

describe('sample', () => {
  it('should return "Hello, John"', () => {
    expect(sample('John')).toBe('Hello, John');
  });
});
