<template>
  <div>
      <ul v-if="this.$store.state.asks.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="ask in this.$store.state.asks">
              <span v-text="ask.title"></span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_ASKS')
    },
}
</script>

<style>

</style>