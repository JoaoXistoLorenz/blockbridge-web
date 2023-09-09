<template>
  <el-row class="topbar">
    <div class="ds-flex">

      <!-- Esquerda -->
      <div class="float-left">
        <el-image class="img-logo pointer" :src="require('@/assets/logo.png')" @click="goToPage(1)"/>
      </div>

      <!-- Direita -->
      <div id="menu-superior" class="float-right right-side-topbar">
        <span class="itens-menu" :class="page === 1 ? 'active' : ''" @click="goToPage(1)">
          Escalabilidade
        </span>
        <span class="itens-menu" :class="page === 2 ? 'active' : ''" @click="goToPage(2)">
          DEXs
        </span>
        <span class="itens-menu" :class="page === 3 ? 'active' : ''" @click="goToPage(3)">
          Lending
        </span>
        <span class="itens-menu" :class="page === 4 ? 'active' : ''" @click="goToPage(4)">
          Liquid Staking
        </span>
        <span class="itens-menu" :class="page === 5 ? 'active' : ''" @click="goToPage(5)">
          NFTs
        </span>

        <!-- Botão -->
        <el-button class="btn-destaque" @click="goToNovaSolucao()"> 
          Informe outra solução
          <font-awesome-icon icon="comments" class="ml-5px"></font-awesome-icon>
        </el-button>
      </div>

      <!-- Mobile -->
      <div class="menu-mobile">
        <font-awesome-icon icon="bars" class="ml-5px"></font-awesome-icon>
      </div>
    </div>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Topbar',
  })

  export default class Topbar extends Vue {
    
    @Prop()
    public page!: number;

    public goToPage(num: number): void {
      try {
        const pages = ['Home', 'Dexs', 'Lending', 'LiquidStaking', 'Nfts' ]
        const paths = ['/', '/dexs', '/lending', '/liquid-staking', '/nfts' ]
        if (this.$router.currentRoute.name !== pages[num - 1]) {
          this.$router.push({ path: paths[num - 1], replace: true });
        }
      } catch (e) {
        return;
      }
    }

    public goToNovaSolucao(): void {
      try {
        if (this.$router.currentRoute.name !== 'NovaSolucao') {
          this.$router.push({ path: '/nova-solucao', replace: true });
        }
      } catch (e) {
        return;
      }
    }

    public created(): any {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
</script>

<style scoped lang="scss">
</style>