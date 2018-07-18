exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('donations').del()
    .then(function () {
      // Inserts seed entries
      return knex('donations').insert([
        {id: 1, amount: 5, store_id: 1, timestamp: '2018-07-16'},
        {id: 2, amount: 3, store_id: 2, timestamp: '2018-07-17'},
        {id: 3, amount: 10, store_id: 1, timestamp: '2018-07-17'}
      ])
    })
}
