const getDbConn = require('knex')

let testConfig = require('../../../server/db/knexfile').test

module.exports = {
  getTestDb: () => getDbConn(testConfig),

  initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },

  cleanup: (db) => {
    return db.destroy()
  }
}
