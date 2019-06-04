<template>
  <div class="ac-title-2">
    <div class="title">
      <span
        class="marker"
        :style="markerStyle"
      />
      <span class="text">{{ title }}</span>
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Title2 extends Vue {
  @Prop() readonly title!: string

  @Prop() readonly color!: string

  get markerStyle () {
    return {
      backgroundColor: this.color
    }
  }
}
</script>

<style lang="scss">
.ac-title-2 {
  padding: 8px 16px;

  .title {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 700;
    color: #333;

    display: flex;
    align-items: center;
  }

  .marker {
    width: 4px;
    height: 16px;
    border-radius: 2px 0 0 2px;
    background: #6260e1;
    margin-right: 8px;
  }

  .text {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
