
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('posts').insert([
    {id: 1, text: 'post #1', user_id: 1},
    {id: 2, text: 'post #2', user_id: 1},
    {id: 3, text: 'post #3', user_id: 2}
  ]);
};
