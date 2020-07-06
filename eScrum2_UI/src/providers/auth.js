import Cookies from 'js-cookie'

const TokenKey = 'Supply-User-Token'
const RefreshTokenKey = 'Supply-User-RefreshToken'

export function getToken() {
  // [Dillon]
  return Cookies.get(TokenKey)
  // return null;
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 7 })
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(token) {
  return Cookies.set(RefreshTokenKey, token, { expires: 7 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
