import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
Vue.use(iView.LoadingBar)

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
      children: [
        {
          path: '/admin/console/outline',
          name: 'Outline',
          component: resolve => require(['@/components/admin/console/OutlinePage'], resolve)
        },
        {
          path: '/admin/console/personalInfo',
          name: 'PersonalInfo',
          component: resolve => require(['@/components/admin/console/PersonalInfoPage'], resolve)
        },
        {
          path: '/admin/management/article',
          name: 'ArticleManagement',
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
          component: resolve => require(['@/components/admin/options/OptionGeneral.vue'], resolve)
        },
        {
          path: '/admin/write/article',
          name: 'WriteArticle',
          component: resolve => require(['@/components/admin/write/WriteArticlePage.vue'], resolve)
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
