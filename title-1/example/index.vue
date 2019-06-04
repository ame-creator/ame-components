<template>
  <Title1 v-bind="options" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Title1 from '../src'

@Component({
  components: {
    Title1
  }
})
export default class Example extends Vue {
  options = { title: '标题' }
}
</script>
