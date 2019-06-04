<template>
  <div class="ac-title-1">
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Title1 extends Vue {
  @Prop() readonly title!: string
}
</script>

<style lang="scss">
.ac-title-1 {
  padding: 8px 16px;
  text-align: center;

  .title {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
  }
}
</style>
