<template>
  <v-toolbar dark prominent :src="background">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Tabnews</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-avatar v-if="user" class="mt-1" size="42">
      <img :src="user.avatar" />
    </v-avatar>
    <span v-if="user" class="mt-3 pl-2">{{ user.name }}</span>

    <v-btn v-if="user" icon @click="logout">
      <v-icon>fas fa-sign-out-alt</v-icon>
    </v-btn>

    <v-btn
      v-if="!user"
      color="blue-grey"
      class="ma-2 white--text"
      @click="login"
    >
      Login
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ['background', 'user'],
  methods: {
    logout() {
      this.$emit('onLogout')
    },
    login() {
      this.$emit('onLogin')
    },
  },
}
</script>
