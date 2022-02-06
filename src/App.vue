<template>
  <div id="app">
    <userData/>
    <userDetail />
  </div>
</template>

<script>
import userData from './components/userData.vue'
import userDetail from './components/userDetail.vue'
export default {
  name: 'App',
  components: {
    userData,
    userDetail
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
