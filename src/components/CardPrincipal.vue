<template>
  <el-card class="hover-card" :body-style="{ padding: '0px' }">
    <div @click="irParaPlataforma(plataforma.id)">
      <div class="background-img" >
        <span class="tipo-card">
          {{ plataforma.tipoEscalabilidade.id ? findTipoEscalabilidade(parseInt(plataforma.tipoEscalabilidade.id)) : findTipoMenu(parseInt(plataforma.tipoMenu.id))}}
        </span>
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
      <el-button type="text" @click="openWebsite(plataforma.urlsite)"> 
        Visite o website <font-awesome-icon icon="right-to-bracket"/>
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { TiposEscalabilidade, TipoMenu } from '../utils/enum';

  @Component({
    name: 'CardPrincipal',
  })

  export default class CardPrincipal extends Vue {
    
    @Prop()
    public plataforma!: any;

    @Prop({ default: false })
    public isPlataforma;

    public imageUrl(img: string): any {
      return require(`@/assets/${img}`);
    }

    public openWebsite(url: string): void {
      window.open(url, "_blank");
    }

    public findTipoEscalabilidade(num: number): string {
      return TiposEscalabilidade[num].toString();
    }

    public findTipoMenu(num: number): string {
      return TipoMenu[num].toString();
    }

    public async irParaPlataforma(id: number): Promise<void> {
      if (this.isPlataforma) {
        this.$emit('atualizaPlataforma', [id]);
        return;
      }
      this.$router.replace({ path: `/plataforma/${id}`, replace: true });
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