<template>
  <v-main class="overflow-hidden">
    <app-bar
      :background="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
      :user="user"
      @onLogout="logout"
      @onLogin="login"
    ></app-bar>

    <ListTabnews> </ListTabnews>
  </v-main>
</template>

<script>
import ListTabnews from '@/components/ListTabnews.vue'
import AppBar from '@/components/AppBar.vue'

export default {
  data: () => ({
    user: null,
  }),
  created() {
    this.loadLoggedUser()
  },
  methods: {
    loadLoggedUser() {
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      if (loggedUserJSON) {
        this.user = JSON.parse(loggedUserJSON).user
      }
    },
    logout() {
      window.localStorage.removeItem('loggedUser')
      this.user = null
    },
    login() {
      this.$router.push({ name: 'login' })
    },
  },
  components: {
    AppBar,
    ListTabnews,
  },
}
</script>

<style lang="scss"></style>
