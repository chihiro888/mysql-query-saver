const SWAGGER = {
  // auth
  AUTH: {
    TAG: 'auth',
    URL: 'api/auth',
    SIGN_IN: {
      URL: 'signIn',
      SUMMARY: 'This is Sign In API',
      DESC: 'Sign In API',
      RES_200: 'OK',
      RES_401: 'UNAUTHORIZED',
      MSG: {
        OK: '',
        UNAUTHORIZED: ''
      }
    }
  },

  // user
  USER: {
    TAG: 'user',
    URL: 'api/user',
    CREATE_USER: {
      URL: 'createUser',
      SUMMARY: 'This is Create User API',
      DESC: 'Create User API',
      RES_200: 'OK',
      MSG: {
        OK: ''
      }
    }
  }
}

export default SWAGGER