<template>
  <div id="footer">
    <p>2018 - yd - localhost:8080</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
#footer {
  margin-top: 64px;
  padding-bottom: 32px;
  border-top: 1px solid rgba(0 , 0, 0, .1);
  p {
    text-align: center;
    line-height: 2em;
  }
}
@media screen and (max-width: 767px) {
  #footer {
    margin-top: 32px;
  }
}
</style>
