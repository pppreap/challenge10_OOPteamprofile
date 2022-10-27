const Engineer = require('./lib/Engineer.js');

test('Creates Engineer Section', ()=> {
    const engineer = new Engineer ("Paula", 0326, "paula@gmail.com");

    expect(engineer.github).toEqual(expect.any(String));
   
});