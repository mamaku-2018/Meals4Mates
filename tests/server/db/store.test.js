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
  const expected = [ 'email', 'hash', 'owner', 'name', 'address', 'phone' ]
  return db.getStoreDetails(id, testDb)
    .then(details => {
      expect(Object.keys(details[0])).toEqual(expected)
    })
})

