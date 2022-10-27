
const Employee = require('./lib/Employee.js');

test('Creates Employee Section', ()=> {
    const employee = new Employee ("Paula", 0326, "paula@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain("@");
    expect(employee.id).toEqual(expect.any(Number));
});