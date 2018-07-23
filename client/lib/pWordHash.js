const passwordHash = require('password-hash')

let hashedPassword = passwordHash.generate('Admin!23')

function pHasher () {
console.log(hashedPassword)
}
pHasher()
