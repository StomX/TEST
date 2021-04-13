<template>
  <div class="header">
    <router-link to="/news">News</router-link> | 
    <router-link to="/ask">Ask</router-link> | 
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a:visited {
    color: unset;
}
.header {
    color: green;
    padding: 8px;
}
.header .router-link-exact-active {
    color: darkblue;
}
</style>