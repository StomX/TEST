<template>
  <div>
      <ul v-if="this.$store.state.jobs.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="job in this.$store.state.jobs">
              <span v-text="job.title"></span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_JOBS')
    }
}
</script>

<style>

</style>