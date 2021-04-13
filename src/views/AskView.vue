<template>
  <div>
      <ul v-if="fetchedAsks.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="ask in fetchedAsks">
              <span v-text="ask.title"></span>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'fetchedAsks'
        ])
    },
    created() {
        this.$store.dispatch('FETCH_ASKS')
    },
}
</script>

<style>

</style>