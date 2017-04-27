const bcrypt = require('bcrypt-nodejs');
const pass = bcrypt.hashSync('test');

exports.seed = function(knex, Promise) {
  // Insert ALL existing entries
  return knex('users').insert([
    {id: 1, email: 'test@test.com', password: pass},
    {id: 2, email: 'test2@test.com', password: pass},
    {id: 3, email: 'test3@test.com', password: pass}
  ]);
};
