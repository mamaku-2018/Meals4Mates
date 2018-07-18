exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'test1@test.com', hash: '11111', store_id: '1', name: 'user1'},
        {id: 2, email: 'test2@test.com', hash: '11111', store_id: '3', name: 'user2'},
        {id: 3, email: 'test3@test.com', hash: '11111', store_id: '2', name: 'user3'}
      ])
    })
}
