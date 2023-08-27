<template>
  <el-card class="hover-card" :body-style="{ padding: '0px' }">
    <div @click="irParaPlataforma(plataforma.id)">
      <div class="background-img" >
        <span class="tipo-card">{{findTipo(plataforma.tipo)}}</span>
        <el-image class="img-card" :src="imageUrl(plataforma.imagem)" />
      </div>
      <div class="text-card">
        <div class="title-card">
          <font-awesome-icon class="color-red mr-5px" icon="thumbtack"/> {{plataforma.nome}}
        </div>
        <div class="descricao-card">
          {{plataforma.descricao}}
        </div>
      </div>
    </div>
    <div class="card-btn">
      <el-button type="text" @click="openWebsite(plataforma.url)"> 
        Visite o website <font-awesome-icon icon="right-to-bracket"/>
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { TiposEscalabilidade } from '../utils/enum';

  @Component({
    name: 'CardPrincipal',
  })

  export default class CardPrincipal extends Vue {
    
    @Prop()
    public plataforma!: any;

    public imageUrl(img: string) {
      return  require(`@/assets/${img}`);
    }

    public openWebsite(url: string) {
      window.open(url, "_blank");
    }

    public findTipo(num: number): string {
      return TiposEscalabilidade[num].toString();
    }

    public irParaPlataforma(id: number): void {
      this.$router.push({ path: '/plataforma', replace: true });
    }

  }
</script>

<style scoped lang="scss">
.title-card {
  font-weight: 900;
  font-size: 1.2rem;
}

.tipo-card {
  position: absolute;
  top: 5px;
  right: 10px;
  font-weight: bold;
  font-size: 10px;
  color: white;
  background: orange;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 2px;
  border-radius: 10px;
}

.descricao-card {
  line-height: 25px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>