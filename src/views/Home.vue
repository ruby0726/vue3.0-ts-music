<template>
  <div class="home">
    <header class="header bg-theme-color">
       <span
          className="iconfont menu"
        >
          &#xe65c;
        </span>
        <span className="title">喜悦</span>
        <span
          className="iconfont search"
        >
          &#xe62b;
        </span>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    & > span {
      line-height: 40px;
      color: #f1f1f1;
      font-size: 20px;
      &.iconfont {
        font-size: 25px;
      }
    }
  }
</style>