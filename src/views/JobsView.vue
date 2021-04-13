<template>
  <div>
      <ul v-if="fetchedJobs.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="job in fetchedJobs">
              <span v-text="job.title"></span>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'fetchedJobs'
        ])
    },
    created() {
        this.$store.dispatch('FETCH_JOBS')
    }
}
</script>

<style>

</style>