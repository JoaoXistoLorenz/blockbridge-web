<template>
  <el-row class="message">
    <el-col class="notfound-col">
      <el-card class="notfound-card">
        <div slot="header" class="titulo-notfound">
          <span>OOps!</span>
        </div>
        <div style="padding-bottom: 50px">
          <el-row class="center">
            <div class="circle-notfound">
              <font-awesome-icon icon="exclamation" class="color-white ic"/>
            </div>
          </el-row>
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
.circle-notfound {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  margin: auto;
}

.ic {
  padding-top: 25px;
}

</style>
