exports.seed = (knex, Promise) => {
  return knex('stores').del()
    .then(function () {
      return knex('stores').insert([
        {id: 1, name: 'Pita Pit', suburb: 'Pt Chevalier', city: 'Auckland', admin: false, address: '1194 Great North Rd', phone: 21111112, lat: -36.870313, lng: 174.711074, image_url: 'image1.jpg', email: 'test1@test.com', hash: '11111', owner: 'user1'},
        {id: 2, name: 'BurgerFuel', suburb: 'Mt Eden', city: 'Auckland', admin: false, address: '128 Valley Road', phone: 21111333, lat: -36.876113, lng: 174.751367120, image_url: 'image2.jpg', email: '222@test.com', hash: '22222', owner: 'user2'},
        {id: 3, name: 'Subway', suburb: 'Grafton', city: 'Auckland', admin: false, address: '61 Park Road', phone: 21112221, lat: -36.860257, lng: 174.768446, image_url: 'image3.jpg', email: '333@test.com', hash: '33333', owner: 'user3'},
        {id: 4, name: 'Pita Pit', suburb: 'CBD', city: 'Auckland', admin: true, address: '291-297 Queen Street', phone: 11111111, lat: -36.850732, lng: 174.763838, image_url: 'image3.jpg', email: '333@test.com', hash: '33333', owner: 'City Owner'},
        {id: 5, name: 'Subway', suburb: 'Newmarket', city: 'Auckland', admin: true, address: '88 Broadway', phone: 11111111, lat: -36.865534, lng: 174.779020, image_url: 'image3.jpg', email: '333@test.com', hash: '33333', owner: 'City Owner'},
        {id: 6, name: 'BurgerFuel', suburb: 'Mt Roskill', city: 'Auckland', admin: true, address: '22 Stoddard Rd', phone: 11111111, lat: -36.907067, lng: 174.733351, image_url: 'image3.jpg', email: '333@test.com', hash: '33333', owner: 'City Owner'}
      ])
    })
}
