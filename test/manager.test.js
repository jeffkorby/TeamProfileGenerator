const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

test('Can add a number with constructor', () => {
    const testValue = 8885556666;
    const e = new Manager('Tucker', 25, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('The getOfficeNumber() returns the office number', () => {
    const testValue = 8885556666;
    const e = new Manager('Tucker', 25, 'test@test.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test('The getRole() returns "Manager"', () => {
    const testValue = 'Manager';
    const e = new Manager('Tucker', 25, 'test@test.com', 8885556666);
    expect(e.getRole()).toBe(testValue);
});