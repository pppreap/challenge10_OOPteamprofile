const Intern = require('./lib/Intern.js');

test('Creates Intern Section', ()=> {
    const intern = new Intern ("Paula", 0326, "paula@gmail.com");

    expect(intern.school).toEqual(expect.any(String));
   
});