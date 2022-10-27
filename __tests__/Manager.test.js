const Manager = require("../lib/manager.js");

test('Creates Manager Section', ()=> {
    const manager = new Manager ("Paula", 326, "paula@gmail.com", 80);

    expect(manager.officeNumber).toEqual(expect.any(Number));
   
});

test('Get Manager Office Number', ()=> {
    const manager = new Manager ("Paula", 326, "paula@gmail.com", 80);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('Get Manager Role', ()=> {
    const manager = new Manager ("Paula", 326, "paula@gmail.com", 80);

    expect(manager.getRole()).toEqual("Manager");
});