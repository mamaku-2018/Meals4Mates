export function isValidEmail (email) {
  const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
  return !re.test(String(email).toLowerCase())
}

export function isWeakPassword (password) {
  const symbols = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
  return !symbols.test(password)
}
