const Engineer = require("../lib/employee");
const Employee = require('../lib/employee');

test('Can add Github with constructor', () => {
    const testValue = 'GithubUser';
    const e = new Engineer('Foo', 50, 'test@test.com', testValue);
    expect(e.gitHub).toBe(testValue);
});

test('The getGitHub() returns Github', () => {
    const testValue = 'GithubUser';
    const e = new Engineer('Foo', 50, 'test@test.com', 'GithubUser');
    expect(e.getGitHub()).toBe(testValue);
});

test('The getRole() returns "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 50, 'test@test.com', 'GithubUser');
    expect(e.getRole()).toBe(testValue);
});