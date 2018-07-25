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
  return db.getTotalDonations(testDb)
    .then(total => {
      expect(total[0].donation).toBe(2214)
    })
})
