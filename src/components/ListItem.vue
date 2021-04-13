<template>
  <div class="list-item">
      <ul v-if="items.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="(item, index) in items" v-bind:key="item+index">
              <span v-text="index+1"></span>
              <a v-bind:href="item.url" v-text="item.title"></a>
              <small>{{item.time_ago}} by <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link></small>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters, Store } from 'vuex'

export default {
    computed: {
        items() {
            return this.$store.state[this.$route.name+'Data'];
        }
    },
    created() {
        this.$store.dispatch('FETCH_' + this.$route.name.toUpperCase() )
    }
}
</script>

<style>

</style>