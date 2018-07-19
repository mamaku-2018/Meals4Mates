exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('balance').del()
    .then(function () {
      // Inserts seed entries
      return knex('balance').insert([
        {id: 1, donation: 10, redemption: 0, store_id: 2, timestamp: '2018-07-19'},
        {id: 2, donation: 5, redemption: 0, store_id: 1, timestamp: '2018-07-20'},
        {id: 3, donation: 0, redemption: 5, store_id: 2, timestamp: '2018-07-20'}
      ])
    })
}
