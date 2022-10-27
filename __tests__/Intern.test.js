const Intern = require("../lib/intern.js");

test('Creates Intern Section', ()=> {
    const intern = new Intern ("Paula", "0326", "paula@gmail.com", "UMASS");

    expect(intern.school).toEqual(expect.any(String));
   
});