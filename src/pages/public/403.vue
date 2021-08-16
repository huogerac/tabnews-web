<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="6" offset-md="3">
        <v-img
          class="mx-auto"
          max-width="280"
          src="../../assets/403_authentication.png"
        ></v-img>
        <span class="pa-4">
          <h2 class="text-center">Acesso não permitido</h2>
        </span>
        <v-btn block color="secondary" class="mr-4" x-large @click="home"
          >Página inicial <v-icon class="pl-3">fa-arrow-right</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    home() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
