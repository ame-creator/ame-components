<template>
  <Title2 v-bind="options" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Title2 from '../src'

@Component({
  components: {
    Title2
  }
})
export default class Example extends Vue {
  options = {
    title: '标题',
    color: '#811A7F'
  }
}
</script>
