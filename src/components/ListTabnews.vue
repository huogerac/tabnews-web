<template>
  <v-container>
    <v-btn rounded primary @click="showCreateTabnewsDialog = true">
      <v-icon class="px-2">fa-plus-circle fa-sm</v-icon> Post a Tabnews
    </v-btn>

    <v-row
      v-if="loading"
      class="fill-height"
      align-content="center"
      justify="center"
    >
      <v-col class="text-subtitle-1 text-center" cols="12">
        Getting Tabnews...
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

    <v-list three-line>
      <template v-for="(item, index) in tabnewsList">
        <v-list-item :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.author.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle
              v-html="
                `${item.description} &mdash; <span class='text--primary'>by ${item.author.name}</span>`
              "
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider :key="index" :inset="true"></v-divider>
      </template>
    </v-list>

    <!-- Create Tabnews Dialog -->
    <create-tabnews
      :showDialog="showCreateTabnewsDialog"
      @onClose="showCreateTabnewsDialog = false"
      @onCreated="updateList"
    >
    </create-tabnews>
  </v-container>
</template>

<script>
import TabnewsApi from '@/api/tabnews.api.js'
import CreateTabnews from '@/components/CreateTabnews.vue'

export default {
  components: { CreateTabnews },
  name: 'TabnewsList',

  data: () => ({
    loading: false,
    tabnewsList: [],
    showCreateTabnewsDialog: false,
  }),
  methods: {
    getTabnews() {
      this.loading = true
      TabnewsApi.list().then((response) => {
        this.tabnewsList = response
        this.loading = false
      })
    },
    updateList() {
      this.getTabnews()
      this.showCreateTabnewsDialog = false
    },
  },
  created() {
    this.getTabnews()
  },
}
</script>
