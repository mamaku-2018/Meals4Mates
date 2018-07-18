const localStorage = global.window.localStorage
const TOKEN = 'token'
export default {
  saveToken,
  getToken
}

export function saveToken (token) {
  if (token) {
    localStorage.setItem(TOKEN, token)
  } else {
    localStorage.removeItem(TOKEN)
  }
}

export function getToken () {
  return localStorage.getItem(TOKEN)
}
