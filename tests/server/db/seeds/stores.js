exports.seed = (knex, Promise) => {
  return knex('stores').del()
    .then(function () {
      return knex('stores').insert([
        {name: 'Pita Pit', suburb: 'Pt Chevalier', city: 'Auckland', admin: false, address: '1194 Great North Rd', phone: '021 111 112', lat: -36.870313, lng: 174.711074, image_url: 'image1.jpg', email: 'JS@gmail.com', hash: '11111', owner: 'John Smith'},
        {name: 'BurgerFuel', suburb: 'Mt Eden', city: 'Auckland', admin: false, address: '128 Valley Road', phone: '021 111 333', lat: -36.876113, lng: 174.751367120, image_url: 'image2.jpg', email: '222@test.com', hash: '22222', owner: 'Peter Piper'},
        {name: 'Subway', suburb: 'Grafton', city: 'Auckland', admin: false, address: '61 Park Road', phone: '021 112 221', lat: -36.860257, lng: 174.768446, image_url: 'image3.jpg', email: 'nope@icloud.com', hash: '33333', owner: 'Biggie Smalls'},
        {name: 'Pita Pit', suburb: 'CBD', city: 'Auckland', admin: false, address: '291-297 Queen Street', phone: '022 111 1111', lat: -36.850732, lng: 174.763838, image_url: 'image3.jpg', email: 'sup@gmail.com', hash: '33333', owner: 'Slick Rick'},
        {name: 'Subway', suburb: 'Newmarket', city: 'Auckland', admin: false, address: '88 Broadway', phone: '027 345 678', lat: -36.865534, lng: 174.779020, image_url: 'image3.jpg', email: 'PP@test.com', hash: '33333', owner: 'Peewee Herman'},
        {name: 'BurgerFuel', suburb: 'Mt Roskill', city: 'Auckland', admin: false, address: '22 Stoddard Rd', phone: '021 667 543', lat: -36.907067, lng: 174.733351, image_url: 'image3.jpg', email: 'JB@test.com', hash: '33333', owner: 'Joe Blogs'}
      ])
    })
}
