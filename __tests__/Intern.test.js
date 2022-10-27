const Intern = require("../lib/intern.js");

test('Creates Intern Section', ()=> {
    const intern = new Intern ("Paula", "0326", "paula@gmail.com", "UMASS");

    expect(intern.school).toEqual(expect.any(String));
   
});

test('Get Intern School Name', ()=> {
    const intern = new Intern ("Paula", "0326", "paula@gmail.com", "UMASS");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get Intern Role', ()=> {
    const intern = new Intern ("Paula", "0326", "paula@gmail.com", "UMASS");

    expect(intern.getRole()).toEqual("Intern");
});