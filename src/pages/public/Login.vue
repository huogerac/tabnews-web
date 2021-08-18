<template>
  <v-container class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col lg="5" md="5" xs="12" class="pa-6">
        <v-img src="../../assets/undraw_login.svg"></v-img>
      </v-col>
      <v-col lg="7" md="7" xs="12" class="pa-12 flex-grow-1 flex-shrink-0">
        <div align="center">
          <h1 class="pa-6 pt-12 grey--text text--darken-2">
            Log in to Tabnews
          </h1>
          <p class="pt-4">
            <v-btn
              :loading="loading"
              rounded
              color="grey darken-3"
              dark
              x-large
              @click="login"
            >
              <v-icon class="white--text pr-2">fab fa-github</v-icon>
              <span class="white--text text-none">Continue with GitHub</span>
            </v-btn>
          </p>
          <p>
            <v-btn text @click="home">
              <v-icon class="pr-2">fas fa-angle-left</v-icon>
              <span class="grey--text text--darken-3 text-none">Back home</span>
            </v-btn>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import settings from '@/settings'

export default {
  data: () => ({
    loading: false,
  }),
  computed: {
    apiUrl() {
      if (!settings.apiBaseUrl || settings.apiBaseUrl == '/') {
        return `${location.protocol}//${location.host}`
      }
      return settings.apiBaseUrl
    },
  },
  methods: {
    login() {
      this.loading = true
      window.location.href = `${this.apiUrl}/api/auth/github/login`
    },
    home() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
