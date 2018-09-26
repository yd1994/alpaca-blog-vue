<template>
  <div id="admin-page">
    <AdminHeader></AdminHeader>
    <router-view/>
    <AdminFooter></AdminFooter>
  </div>
</template>

<script>
import AdminHeader from './AdminHeader'
import AdminFooter from './ArticleFooter'
export default {
  name: 'AdminPage',
  components: {
    AdminHeader,
    AdminFooter
  }
}
</script>

<style lang="scss">
#admin-page {
}
</style>
