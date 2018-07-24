const db = require('../../../server/db/functions/store')
const env = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('getStoreDetails returns details of the specified store', () => {
  const id = 1
  const expected = ['id',
    'name',
    'suburb',
    'city',
    'admin',
    'address',
    'email',
    'hash',
    'owner',
    'lat',
    'lng',
    'phone',
    'image_url',
    'created_at']
  return db.getStoreDetails(id, testDb)
    .then(details => {
      expect(Object.keys(details)).toEqual(expected)
    })
})

jest.mock('../../../server/auth/hash')

test('addNewStore returns new id of new store', () => {
  const newStore = {
    name: 'test',
    address: 'test street',
    owner: 'test',
    phone: 111,
    email: 'test@test.com',
    hash: '12321312',
    lat: '100',
    lng: '90',
    image_url: 'img.com'
  }
  return db.addNewStore(newStore, testDb)
    .then((storeId) => {
      expect(storeId.length).toBe(1)
    })
})

test('edit updates the store details in the store', () => {
  const store = {
    id: 3,
    name: 'test',
    address: 'test street',
    owner: 'test',
    phone: 111,
    email: 'test@test.com',
    hash: '12321312',
    lat: '100',
    lng: '90'
  }

  return db.editStoreDetails(store, testDb)
    .then(details => {
      expect(details).toEqual(1)
    })
})
