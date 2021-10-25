const Employee = require("../lib/employee");

test('Can add a new employee', () => {
    const e = new Employee('Tucker');
    expect(typeof(e)).toBe('object');
});

test('Can add a name using constructor', () => {
    const name = 'Tucker';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('The getName() returns a name', () => {
    const name = 'Tucker';
    const e = new Employee('Tucker');
    expect(e.getName()).toBe(name);
});

test('Can add an ID with constructor', () => {
    const testValue = 25;
    const e = new Employee('Foo', testValue);
    expect(e.id).toEqual(testValue);
});

test('The getID() returns an ID', () => {
    const testValue = 50;
    const e = new Employee('Foo', 50);
    expect(e.getId()).toBe(testValue);
});

test('Can add an email with constructor', () => {
    const testValue = 'test@test.com';
    const e = new Employee('Tucker', 50, testValue);
    expect(e.email).toBe(testValue);
});

test('The getEmail() returns an email', () => {
    const testValue = 'test@test.com';
    const e = new Employee('Tucker', 50, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("The getRole() returns 'Employee'", () => {
    const testValue = 'Employee';
    const e = new Employee('Tucker', 50, 'test@test.com');
    expect(e.getRole()).toBe(testValue);
});

