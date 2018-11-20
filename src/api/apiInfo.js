export default {
  baseUrl: 'https://www.yd1994.com/api',
  articles: {
    uri: '/articles/',
    totalUri: '/articles/total/',
    request: {
      params: {
        page: 1,
        size: 10
      }
    }
  },
  categories: {
    uri: '/categories/',
    totalUri: '/categories/total/',
    request: {
      params: {
        page: 1,
        size: 30
      }
    }
  },
  articleTags: {
    uri: '/articleTags/',
    totalUri: '/articleTags/total/',
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
  sysInformation: {
    uri: '/system/information/',
    siteName: {
      uri: '/system/information/site_name'
    },
    siteAddress: {
      uri: '/system/information/site_address'
    },
    siteDescription: {
      uri: '/system/information/site_description'
    },
    personalName: {
      uri: '/system/information/personal_name'
    },
    personalEmail: {
      uri: '/system/information/personal_email'
    },
    personalContent: {
      uri: '/system/information/personal_content'
    }
  },
  user: {
    uri: '/user/',
    password: {
      uri: '/user/password/'
    }
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
