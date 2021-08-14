<template>
  <v-container>
    <!-- Create Tabnews Dialog -->
    <v-dialog
      v-model="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="onClose">
            <v-icon>fa-times-circle</v-icon>
          </v-btn>
          <v-toolbar-title>Create Tabnews</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="onClose">
              <v-icon class="px-2">far fa-save</v-icon> Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="title"
                    :rules="titleRule"
                    label="Title *"
                    append-icon="fa-newspaper"
                    placeholder="An awesome title"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-textarea
                    v-model="description"
                    label="Description"
                    append-icon="fa-file-alt"
                    placeholder="Complete description or more information"
                    outlined
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import TabnewsApi from '@/api/tabnews.api.js'

export default {
  props: ['showDialog'],
  data: () => ({
    valid: false,
    title: '',
    titleRule: [
      (v) => !!v || 'Title is required',
      (v) => v.split(' ').length > 3 || 'Add an awesome title',
    ],
    description: null,
  }),
  methods: {
    createTabnews() {
      TabnewsApi.list().then((response) => {
        this.tabnewsList = response
      })
    },
    onClose() {
      this.$emit('onClose')
    },
  },
}
</script>
