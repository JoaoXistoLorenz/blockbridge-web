<template>
  <div class="scroll-to-top">
    <el-button class="btn-scroll" circle v-show="showButton" @click="scrollToTop">
      <font-awesome-icon icon="caret-up" class="color-white"/>
    </el-button>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'BackTop',
  })

  export default class BackTop extends Vue {
    public showButton = false;

    public toggleButtonVisibility(): void {
      this.showButton = window.scrollY > 100;
    }

    public scrollToTop(): void {
      const scrollDuration = 300;
      const scrollStep = -window.scrollY / (scrollDuration / 15);

      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }

    public created(): any {
      window.addEventListener("scroll", this.toggleButtonVisibility);
    }

    public destroyed(): any {
      window.removeEventListener("scroll", this.toggleButtonVisibility);
    }
  }
</script>

<style lang="scss">
</style>