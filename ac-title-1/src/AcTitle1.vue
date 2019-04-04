<template>
  <div class="ac-title-1">
    <h1 class="title">
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AcTitle1 extends Vue {
  @Prop({ default: '' }) readonly title!: string;
}
</script>

<style lang="stylus" scoped>
.ac-title-1
  padding 8px 16px

  .title
    color #333
    font-size 16px
</style>
