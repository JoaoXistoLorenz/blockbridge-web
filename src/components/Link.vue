<template>
  <div @click="navegarPara(link.url)">
    <el-card :shadow="'never'" class="links-card">

      <!-- Imagem -->
      <template v-if="link.tipo === 1">
        <el-image :src="imageUrl(link.imagem)"></el-image>
      </template>

      <!-- Icone -->
      <template v-else>
        <div class="area-card" :style="`background: ${link.bg}; color: ${link.color}`">
          <font-awesome-icon :icon="`${link.icone}`"/>
        </div>
      </template>

      <!-- Texto -->
      <div>{{link.nome}}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Link',
  })

  export default class Link extends Vue {
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