const Engineer = require("../lib/engineer.js");

test('Creates Engineer Section', ()=> {
    const engineer = new Engineer ("Paula", "0326", "paula@gmail.com", "pppreap");

    expect(engineer.github).toEqual(expect.any(String));
   
});


test('Get Engineer Github Username', ()=> {
    const engineer = new Engineer ("Paula", 200, "paula@gmail.com", "pppreap");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Get Engineer Role', ()=> {
    const engineer = new Engineer ("Paula", 200, "paula@gmail.com", "pppreap");

    expect(engineer.getRole()).toEqual("Engineer");
});