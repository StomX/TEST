<template>
  <div>
      <ul v-if="users.length > 0">
          <!-- header -->
          <!-- // header -->
          <li v-for="user in users">
              <span v-text="user.title"></span>
              {{user}}
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(Response => this.users = Response.data)
        .catch(error => console.error(error))
    }
}
</script>

<style>

</style>