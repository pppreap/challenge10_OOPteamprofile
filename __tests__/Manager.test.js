const Manager = require("../lib/manager.js");

test('Creates Manager Section', ()=> {
    const manager = new Manager ("Paula", 326, "paula@gmail.com", 80);

    expect(manager.officeNumber).toEqual(expect.any(Number));
   
});