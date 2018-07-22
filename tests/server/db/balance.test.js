const db = require('../../../server/db/functions/balance')
const env = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => {
  env.cleanup(testDb)
})

test('getCurrentBalance gets the total balance remaining of a store', () => {
  const id = 2
  return db.getStoreTotalDonation(id)
    .then(total => {
      expect(total).toBe(10)
    })
})
