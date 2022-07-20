const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('100, 4, 5 is not a triangle', () => {
    expect(isTriangle(100, 4, 5)).toBe(false);
});
test(', 4, 5 is  not atriangle', () => {
    expect(isTriangle( 4, 5)).toBe(false);
});

test('A, 4, 5 is not atriangle', () => {
    expect(isTriangle('A', 4, 5)).toBe(false);
});
