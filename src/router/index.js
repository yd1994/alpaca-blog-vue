import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
Vue.use(iView.LoadingBar)
Vue.use(iView.Message)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/components/Index'], resolve),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: resolve => require(['@/components/Home'], resolve)
        },
        {
          path: '/categories',
          name: 'Category',
          component: resolve => require(['@/components/category/CategoryPage'], resolve)
        },
        {
          path: '/about',
          name: 'About',
          component: resolve => require(['@/components/about/AboutPage'], resolve)
        },
        {
          path: '/articles/:articleId',
          name: 'Article',
          component: resolve => require(['@/components/article/ArticlePage'], resolve),
          props: true
        },
        {
          path: '/categories/:categoryId/articles',
          name: 'CategoryArticle',
          component: resolve => require(['@/components/category/CategoryArticleListPage'], resolve),
          props: true
        }
      ]
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: resolve => require(['@/components/admin/AdminLoginPage'], resolve)
    },
    {
      path: '/admin',
      name: 'Admin',
      component: resolve => require(['@/components/admin/AdminPage'], resolve),
      redirect: '/admin/console/outline',
      meta: { requiresAuth: true },
      children: [
        {
          path: '/admin/console/outline',
          name: 'Outline',
          meta: { requiresAuth: true },
          component: resolve => require(['@/components/admin/console/OutlinePage'], resolve)
        },
        {
          path: '/admin/console/personalInfo',
          name: 'PersonalInfo',
          meta: { requiresAuth: true },
          component: resolve => require(['@/components/admin/console/PersonalInfoPage'], resolve)
        },
        {
          path: '/admin/management/article',
          name: 'ArticleManagement',
          meta: { requiresAuth: true },
          component: resolve => require(['@/components/admin/management/ArticleManagementPage'], resolve)
        },
        {
          path: '/admin/management/category',
          name: 'CategoryManagement',
          component: resolve => require(['@/components/admin/management/CategoryManagementPage.vue'], resolve)
        },
        {
          path: '/admin/option/general',
          name: 'OptionGeneral',
          meta: { requiresAuth: true },
          component: resolve => require(['@/components/admin/options/OptionGeneral.vue'], resolve)
        },
        {
          path: '/admin/write/article',
          name: 'WriteArticle',
          component: resolve => require(['@/components/admin/write/WriteArticlePage.vue'], resolve)
        },
        {
          path: '/admin/write/article/:articleId',
          name: 'WriteArticleUpdate',
          meta: { requiresAuth: true },
          component: resolve => require(['@/components/admin/write/WriteArticlePage.vue'], resolve),
          props: true
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = window.localStorage.token_access_token
    if (token !== undefined) {
      const tokenExpiresTime = window.localStorage.token_expires_time
      console.info('tokenExpiresTime', tokenExpiresTime < new Date().getTime())
      if (tokenExpiresTime !== undefined && new Date().getTime() < tokenExpiresTime) {
        // token存在并且未过期
        next()
        return
      }
    }
    iView.Message.warning('需要登录')
    next({
      name: 'AdminLogin'
    })
    return
  }
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
