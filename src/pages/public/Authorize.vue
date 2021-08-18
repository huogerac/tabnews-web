<template>
  <v-container style="height: 400px">
    <v-row
      v-if="!missingData"
      class="fill-height"
      align-content="center"
      justify="center"
    >
      <v-col class="text-subtitle-1 text-center" cols="12">
        Getting user authentication
      </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="blue accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row v-else class="fill-height" align-content="center" justify="center">
      <v-col class="text-subtitle-1 text-center" cols="12">
        Invalid data!
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
    missingData: false,
  }),
  created() {
    this.token = this.$route.query.token
    this.refreshToken = this.$route.query.refresh_token

    if (!this.token) {
      this.missingData = true
      return
    }
    const loggedUser = {
      token: this.token,
      refreshToken: this.refreshToken,
      user: jwt_decode(this.token),
    }
    window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
    this.$router.push({ name: 'home' })
  },
}
</script>
