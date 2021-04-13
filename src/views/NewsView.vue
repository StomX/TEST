<template>
  <div>
      <ul v-if="this.$store.state.news.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="user in this.$store.state.news">
              <span v-text="user.title"></span>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS')
    }
}
</script>

<style>

</style>