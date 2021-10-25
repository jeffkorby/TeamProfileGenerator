const Engineer = require("../lib/engineer");
const Employee = require('../lib/employee');

test('Can add github with constructor', () => {
    const testValue = 'GithubUser';
    const e = new Engineer('Foo', 50, 'test@test.com', testValue);
    expect(e.github).toBe(testValue);
});

test('The getgithub() returns github', () => {
    const testValue = 'GithubUser';
    const e = new Engineer('Foo', 50, 'test@test.com', 'GithubUser');
    expect(e.getGithub()).toBe(testValue);
});

test('The getRole() returns "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 50, 'test@test.com', 'GithubUser');
    expect(e.getRole()).toBe(testValue);
});