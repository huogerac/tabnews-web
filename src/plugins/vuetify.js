import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pt from 'vuetify/lib/locale/pt'

import {
  VSnackbar,
  VBtn,
  VIcon,
  VMenu,
  VAvatar,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VSubheader,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon,
    VMenu,
    VAvatar,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VSubheader,
  },
})

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'fa',
  },
})
