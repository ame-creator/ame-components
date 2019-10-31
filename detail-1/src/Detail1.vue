<template>
  <div class="ac-detail-1">
    <div class="title">
      {{ title }}
    </div>
    <div class="description">
      <span class="tags">
        <label
          v-for="(tag, i) in computedTags"
          :key="i"
        >
          <p
            class="desc"
            :style="tag.style"
          >{{ tag.title }}</p>
        </label>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface Tag {
  title: string,
  color: string
}

@Component
export default class Detail1 extends Vue {
  @Prop() readonly title!: string

  @Prop() readonly tags!: Tag[]

  get computedTags () {
    const { tags } = this

    if (!tags) {
      return []
    }

    return tags.map(tag => {
      return {
        title: tag.title || '',
        style: {
          color: tag.color
        }
      }
    })
  }
}
</script>

<style lang="scss">
.ac-detail-1 {
  box-sizing: border-box;
  margin: 0 16px;
  padding: 20px 0;
  border-bottom: 1px solid #e9e9e9;

  .title {
    font-size: 20px;
    font-weight: bolder;
    color: #333;
  }

  .description {
    margin-top: 8px;

    .tags {
      font-size: 14px;

      label {
        position: relative;
        display: inline-block;
        margin: 0 8px 0 0;
        padding: 0 8px 0 0;
        white-space: nowrap;

        &::after {
          position: absolute;
          display: block;
          content: "";
          top: 50%;
          right: 0;
          width: 1px;
          height: 12px;
          transform: translateY(-50%);
          background: #e9e9e9;
        }

        &:last-of-type {
          margin-right: 0;
          padding-right: 0;

          &::after {
            display: none;
          }
        }
      }

      .desc {
        margin-bottom: 0;
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
