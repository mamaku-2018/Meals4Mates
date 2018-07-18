exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      // Inserts seed entries
      return knex('stores').insert([
        {id: 1, name: 'store1', address: '1 test street', phone: 2111111, lat: 110, lng: 20, image_url: 'image1.jpg'},
        {id: 2, name: 'store2', address: '2 test street', phone: 2111111, lat: 120, lng: 40, image_url: 'image2.jpg'},
        {id: 3, name: 'store3', address: '3 test street', phone: 2111111, lat: 140, lng: 70, image_url: 'image3.jpg'}
      ])
    })
}
