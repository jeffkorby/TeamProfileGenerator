const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Can add a number with constructor', () => {
    const testValue = 8885556666;
    const e = new Manager('Tucker', 25, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getNumber() returns office number', () => {
    const testValue = 3809676;
    const e = new Manager('Tucker', 25, 'test@test.com', testValue);
    expect(e.getNumber()).toBe(testValue);
});

test('getRole() returns "Manager"', () => {
    const testValue = 'Manager';
    const e = new Manager('Tucker', 25, 'test@test.com', 8885556666);
    expect(e.getRole()).toBe(testValue);
});