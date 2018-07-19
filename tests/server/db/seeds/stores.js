exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      // Inserts seed entries
      return knex('stores').insert([
        {id: 1, name: 'store1', address: '1 test street', phone: 21111112, lat: 110, lng: 20, image_url: 'image1.jpg', email: 'test1@test.com', hash: '11111', owner: 'user1'},
        {id: 2, name: 'store2', address: '2 test street', phone: 21111333, lat: 120, lng: 40, image_url: 'image2.jpg', email: '222@test.com', hash: '22222', owner: 'user2'},
        {id: 3, name: 'store3', address: '3 test street', phone: 21112221, lat: 140, lng: 70, image_url: 'image3.jpg', email: '333@test.com', hash: '33333', owner: 'user3'}
      ])
    })
}
