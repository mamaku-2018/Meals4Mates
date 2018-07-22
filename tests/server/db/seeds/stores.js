exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      // Inserts seed entries
      return knex('stores').insert([
        {id: 1, name: 'Pita Pit', admin: false, address: '1 test street', phone: 21111112, lat: -36.870313, lng: 174.711074, image_url: 'image1.jpg', email: 'test1@test.com', hash: '11111', owner: 'user1'},
        {id: 2, name: 'BurgerFuel', admin: false, address: '2 test street', phone: 21111333, lat: -36.876113, lng: 174.751367120, image_url: 'image2.jpg', email: '222@test.com', hash: '22222', owner: 'user2'},
        {id: 3, name: 'Subway', admin: false, address: '3 test street', phone: 21112221, lat: -36.860257, lng: 174.768446, image_url: 'image3.jpg', email: '333@test.com', hash: '33333', owner: 'user3'},
        {id: 4, name: 'Pita Pit', admin: true, address: 'mission place', phone: 11111111, lat: -36.850732, lng: 174.763838, image_url: 'image3.jpg', email: '333@test.com', hash: '33333', owner: 'City Owner'}
      ])
    })
}
