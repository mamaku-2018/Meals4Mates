const {generate} = require('../../../../server/auth/hash')

exports.seed = (knex, Promise) => {
  return knex('stores').del()
    .then(function () {
      return knex('stores').insert([
        {name: 'City Mission', suburb: 'Auckland Central', city: 'Auckland', admin: true, address: '140 Hobson Street', phone: '09 3039200', lat: -36.850831, lng: 174.760684, image_url: 'citymission.png', email: 'info@aucklandcitymission.org.nz', hash: generate('Admin!23'), owner: 'Wilf Holt'},
        {name: 'Pita Pit', suburb: 'Pt Chevalier', city: 'Auckland', admin: false, address: '1194 Great North Road', phone: '021 111 112', lat: -36.870313, lng: 174.711074, image_url: 'image1.jpg', email: 'JS@gmail.com', hash: generate('Admin!23'), owner: 'John Smith'},
        {name: 'BurgerFuel', suburb: 'Mt Eden', city: 'Auckland', admin: false, address: '128 Valley Road', phone: '021 111 333', lat: -36.876113, lng: 174.751367120, image_url: 'image2.jpg', email: '222@test.com', hash: generate('Admin!23'), owner: 'Peter Piper'},
        {name: 'Subway', suburb: 'Grafton', city: 'Auckland', admin: false, address: '61 Park Road', phone: '021 112 221', lat: -36.860257, lng: 174.768446, image_url: 'image3.jpg', email: 'nope@icloud.com', hash: generate('Admin!23'), owner: 'Biggie Smalls'},
        {name: 'Pita Pit', suburb: 'City Central', city: 'Auckland', admin: false, address: '291-297 Queen Street', phone: '022 111 1111', lat: -36.850732, lng: 174.763838, image_url: 'image3.jpg', email: 'sup@gmail.com', hash: generate('Admin!23'), owner: 'Slick Rick'},
        {name: 'BurgerFuel', suburb: 'Mt Roskill', city: 'Auckland', admin: false, address: '110B Mt Eden Road', phone: '021 667 543', lat: -36.907067, lng: 174.733351, image_url: 'image3.jpg', email: 'JB@test.com', hash: generate('Admin!23'), owner: 'Joe Blogs'},
        {name: 'Subway', suburb: 'Mount Eden ', city: 'Auckland', admin: false, address: '30 Stanley Street', phone: '09 6232561', lat: -36.8713905, lng: 174.7620348, image_url: 'image3.jpg', email: 'subme@hotmail.com', hash: generate('Admin!23'), owner: 'Joe Blogs'},
        {name: 'Subway', suburb: 'Windsor Park', city: 'Auckland', admin: false, address: '17 Antares Place', phone: '09 4755063', lat: -36.8524455, lng: 174.7745321, image_url: 'image3.jpg', email: 'subme@hotmail.com', hash: generate('Admin!23'), owner: 'Michael Jordan'},
        {name: 'BurgerFuel', suburb: 'Windsor Park', city: 'Auckland', admin: false, address: '544 E Coast Road', phone: '09 4784366', lat: -36.7387664, lng: 174.7412064, image_url: 'image2.jpg', email: 'burgerfuel@gmail.com', hash: generate('Admin!23'), owner: 'Simon Richards'},
        {name: 'BurgerFuel', suburb: 'Manukau', city: 'Auckland', admin: false, address: '652 Great South Road', phone: '09 2621560', lat: -36.9871424, lng: 174.8837072, image_url: 'image2.jpg', email: 'burgermanukauu@xtra.co.nz', hash: generate('Admin!23'), owner: 'Samuel Jackson'},
        {name: 'Pita Pit', suburb: 'Royal Oak', city: 'Auckland', admin: false, address: '8 Mount Smart Road', phone: '09 6363257', lat: -36.9119515, lng: 174.7774543, image_url: 'image1.jpg', email: 'pitapit@hotmail.co.nz', hash: generate('Admin!23'), owner: 'Anthony'},
        {name: 'Subway', suburb: 'Wiri', city: 'Auckland', admin: false, address: '786 Great South Road', phone: '09 2634090', lat: -36.8713905, lng: 174.7620348, image_url: 'image3.jpg', email: 'subme@hotmail.com', hash: generate('Admin!23'), owner: 'Chris'},
        {name: 'Pita Pit', suburb: 'Manukau', city: 'Auckland', admin: false, address: '5 Putney Way', phone: '09 2637772', lat: -36.850732, lng: 174.763838, image_url: 'image3.jpg', email: 'sup@gmail.com', hash: generate('Admin!23'), owner: 'Missy Elliot'},
        {name: 'BurgerFuel', suburb: 'Mt Wellington', city: 'Auckland', admin: false, address: '295 Penrose Road', phone: '021 667 543', lat: -36.907067, lng: 174.733351, image_url: 'image3.jpg', email: 'JB@test.com', hash: generate('Admin!23'), owner: 'Beyounce Knowles'},
        {name: 'Subway', suburb: 'East Tamaki', city: 'Auckland', admin: false, address: '2 Kerwyn Avenue', phone: '09 6232561', lat: -36.8713905, lng: 174.7620348, image_url: 'image3.jpg', email: 'subme@hotmail.com', hash: generate('Admin!23'), owner: 'Jay Z'},
        {name: 'Subway', suburb: 'Sunnynook', city: 'Auckland', admin: false, address: '21 Constellation Drive', phone: '09 4796102', lat: -36.8524455, lng: 174.7745321, image_url: 'image3.jpg', email: 'subs4u@hotmail.com', hash: generate('Admin!23'), owner: 'Michael Jackson'},
        {name: 'BurgerFuel', suburb: 'Ellerslie', city: 'Auckland', admin: false, address: '2 Roberts Street', phone: '09 5257752', lat: -36.7387664, lng: 174.7412064, image_url: 'image2.jpg', email: 'burgers@gmail.com', hash: generate('Admin!23'), owner: 'Little Richard'},
        {name: 'BurgerFuel', suburb: 'Pakuranga', city: 'Auckland', admin: false, address: '451 Ti Rakau Drive', phone: '09 2621560', lat: -36.9871424, lng: 174.8837072, image_url: 'image2.jpg', email: 'bestburgermanukauu@xtra.co.nz', hash: generate('Admin!23'), owner: 'Sam Bond'},
        {name: 'Pita Pit', suburb: 'Mairangi Bay', city: 'Auckland', admin: false, address: '27 Apollo Drive', phone: '09 4787482', lat: -36.9119515, lng: 174.7774543, image_url: 'image1.jpg', email: 'pita4u@hotmail.co.nz', hash: generate('Admin!23'), owner: 'Miles Davis'},
        {name: 'Subway', suburb: 'Parnell', city: 'Auckland', admin: false, address: '3/128 Parnell Road,', phone: '09 3584194', lat: -36.8713905, lng: 174.7620348, image_url: 'image3.jpg', email: 'subs@hotmail.com', hash: generate('Admin!23'), owner: 'Frank Ocean'}
      ])
    })
}
