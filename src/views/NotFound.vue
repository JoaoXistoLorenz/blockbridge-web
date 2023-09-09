<template>
  <el-row class="notfound-message">
    <el-col class="notfound-col">
      <el-card class="notfound-card">

        <!-- Titulo -->
        <div slot="header" class="titulo-notfound">
          <span>OOps!</span>
        </div>

        <div style="notfound-padding-bottom">

          <!-- Icone -->
          <el-row class="center">
            <div class="notfound-circle">
              <font-awesome-icon icon="exclamation" class="color-white notfound-icon-padding"/>
            </div>
          </el-row>

          <!-- Texto -->
          <el-row class="titulo-secundario p-10px">
            Parece que você tentou acessar uma página que não existe...
          </el-row>
          <el-row class="titulo-secundario p-10px">
            Aguarde que vamos redirecionar você para a página inicial para facilitar sua navegação!
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'NotFound',
  })

  export default class NotFound extends Vue {

    public mounted(): void {
      setTimeout(() => this.$router.push('/'), 6000);
    }
  }
</script>

<style scoped lang="scss">
</style>
