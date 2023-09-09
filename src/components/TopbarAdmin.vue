<template>
  <el-row class="topbar">
    <div class="ds-flex">

      <!-- Direita -->
      <div class="float-left">
        <el-image class="img-logo pointer" :src="require('@/assets/logo.png')" @click="goToPage(3)"/>
      </div>

      <!-- Esquerda -->
      <div id="menu-superior" class="float-right right-side-topbar">
        <span class="itens-menu" :class="page === 1 ? 'active' : ''" @click="goToPage(1)">
          Melhorias do Sistema
        </span>
        <span class="itens-menu" :class="page === 2 ? 'active' : ''" @click="goToPage(2)">
          Cadastrar Plataforma
        </span>

        <!-- Sair -->
        <el-button class="btn-destaque" @click="sair()">
          <span class="pl-20px pr-20px">
            Sair
            <font-awesome-icon icon="right-from-bracket" class="ml-5px"/>
          </span>
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
    name: 'TopbarAdmin',
  })

  export default class TopbarAdmin extends Vue {
    
    @Prop()
    public page!: number;

    public goToPage(num: number): void {
      try {
        const pages = ['Admin', 'CadastroPlataforma', 'Home']
        const paths = ['/admin-home', '/cadastro-plataforma', '/home']
        if (this.$router.currentRoute.name !== pages[num - 1]) {
          this.$router.push({ path: paths[num - 1], replace: true });
        }
      } catch (e) {
        return;
      }
    }

    public async sair(): Promise<void> {
      try {
        await localStorage.setItem('token', '');
        this.$router.push({ path: '/admin', replace: true });
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