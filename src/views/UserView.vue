<template>
  <div>
      <p>{{fetchedUserData.id}}</p>  
      <p>{{fetchedUserData.karma}}</p>  
      <p>{{fetchedUserData.created}}</p>  
      <div v-html="fetchedUserData.about"></div>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'fetchedUserData'
    ])
  },
  created() {
    console.log( this.$route.params.id)
    this.$store.dispatch('FETCH_USERDATA', this.$route.params.id)
  }
}
</script>

<style>

</style>