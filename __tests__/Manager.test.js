const Manager = require('./lib/Manager.js');

test('Creates Manager Section', ()=> {
    const manager = new Manager ("Paula", 0326, "paula@gmail.com");

    expect(manager.officeNumber).toEqual(expect.any(Number));
   
});