exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('redemptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('redemptions').insert([
        {id: 1, amount: 3, store_id: 1, timestamp: '2018-07-17'},
        {id: 2, amount: 5, store_id: 2, timestamp: '2018-07-19'},
        {id: 3, amount: 10, store_id: 1, timestamp: '2018-07-20'}
      ])
    })
}
