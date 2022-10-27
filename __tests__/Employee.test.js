
const Employee = require("../lib/employee.js");

test('Creates Employee Section', ()=> {
    const employee = new Employee ("Paula", 200, "paula@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});

test('Get Employee Name', ()=> {
    const employee = new Employee ("Paula", 200, "paula@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Get Employee ID', ()=> {
    const employee = new Employee ("Paula", 200, "paula@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Get Employee Email', ()=> {
    const employee = new Employee ("Paula", 200, "paula@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Get Employee Role', ()=> {
    const employee = new Employee ("Paula", 200, "paula@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
});