const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('You can add a school with constructor', () => {
    const testValue = 'MSU';
    const e = new Intern('Foo', 50, 'test@test.com', testValue);
    expect(e.school).toBe(testValue);
});

test('The getSchool() returns school', () => {
    const testValue = 'MSU';
    const e = new Intern('Foo', 50, 'test@test.com', 'MSU');
    expect(e.getSchool()).toBe(testValue);
});

test('The getRole() returns "Intern"', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 50, 'test@test.com', 'MSU');
    expect(e.getRole()).toBe(testValue);
});