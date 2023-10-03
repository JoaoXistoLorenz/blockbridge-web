<template>
  <div @click="navegarPara(link.url)">
    <el-card :shadow="'never'" class="links-card">
      <!-- Imagem -->
      <div class="area-card" :style="`background: ${link.bg}; color: ${link.color}; border-radius: 5px;`">
        <font-awesome-icon :icon="`${link.icone}`"/>
      </div>
      <!-- Texto -->
      <div class="mt-10px">{{link.nome}}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Metricas',
  })

  export default class Metricas extends Vue {
    @Prop()
    public link!: any;

    public imageUrl(img: string): any {
      if (img.includes('http')) {
        return img;
      }
      return require(`@/assets/${img}`);
    }

    public navegarPara(url: string): void {
      if (!url) return;
      window.open(url, "_blank");
    }
  }
</script>

<style scoped lang="scss">
</style>