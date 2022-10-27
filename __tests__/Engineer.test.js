const Engineer = require("../lib/engineer.js");

test('Creates Engineer Section', ()=> {
    const engineer = new Engineer ("Paula", "0326", "paula@gmail.com", "pppreap");

    expect(engineer.github).toEqual(expect.any(String));
   
});