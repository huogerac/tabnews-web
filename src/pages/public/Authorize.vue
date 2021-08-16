<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="6" offset-md="3">
        <v-progress-circular indeterminate color="accent"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jwt_decode from 'jwt-decode'

export default {
  data: () => ({
    loading: true,
    token: null,
    refreshToken: null,
  }),
  created() {
    this.token = this.$route.query.token
    this.refreshToken = this.$route.query.refresh_token
    const loggedUser = {
      token: this.token,
      refreshToken: this.refreshToken,
      user: jwt_decode(this.token),
    }
    window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
  },
}
</script>
