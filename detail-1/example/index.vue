<template>
  <v-app>
    <Detail1 v-bind="options" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Vuetify, { VApp } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import Detail1 from '../src'

Vue.use(Vuetify)

@Component({
  components: {
    VApp,
    Detail1
  }
})
export default class Example extends Vue {
  options = {
    title: '首席产品体验师',
    tags: [
      {
        title: '15k/每月',
        color: '#fc6565'
      },
      {
        title: '月结',
        color: '#999999'
      }
    ]
  }
}
</script>
