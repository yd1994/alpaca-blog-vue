export default {
  articles: {
    uri: '/articles/',
    request: {
      params: {
        page: 1,
        size: 10
      }
    }
  },
  categories: {
    uri: '/categories/',
    request: {
      params: {
        page: 1,
        size: 30
      }
    }
  },
  images: {
    uri: '/images/'
  },
  oauth: {
    token: {
      uri: '/oauth/token',
      request: {
        params: {
          username: '',
          password: '',
          grant_type: 'password',
          scope: 'all',
          client_id: 'client1',
          client_secret: '123456'
        }
      }
    }
  }
}
