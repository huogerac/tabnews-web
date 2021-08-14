<template>
  <v-app>
    <v-main class="overflow-hidden">
      <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-toolbar-title>Tabnews</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <ListTabnews> </ListTabnews>
    </v-main>
  </v-app>
</template>

<script>
import ListTabnews from './components/ListTabnews'

export default {
  name: 'App',

  components: {
    ListTabnews,
  },

  data: () => ({
    //
  }),
}
</script>
