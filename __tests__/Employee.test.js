
const Employee = require("../lib/employee.js");

test('Creates Employee Section', ()=> {
    const employee = new Employee ("Paula", 200, "paula@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});