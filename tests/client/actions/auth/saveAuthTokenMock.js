jest.mock('../../../../client/lib/auth', () => {
  const testToken = {id: 'test token id'}
  const saveAuthToken = {token: 'test token value'}
  return {
    saveAuthToken: () => testToken,
    logOff: () => saveAuthToken
  }
})
