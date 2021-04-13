<template>
  <div>
      <ul v-if="fetchedNews.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="user in fetchedNews">
              <span v-text="user.title"></span>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'fetchedNews'
        ])
    },
    created() {
        this.$store.dispatch('FETCH_NEWS')
    }
}
</script>

<style>

</style>