<template>
  <el-card class="hover-card" :body-style="{ padding: '0px' }">
    <div @click="irParaPlataforma(plataforma.id)">

      <!-- Imagem Card -->
      <div class="background-img">

        <!-- Tipo -->
        <span class="tipo-card">
          {{ plataforma.tipoEscalabilidade?.id ? 
            findTipoEscalabilidade(parseInt(plataforma.tipoEscalabilidade.id)) : 
            findTipoMenu(parseInt(plataforma.tipoMenu.id))
          }}
        </span>

        <!-- Blockchains -->
        <el-tooltip effect="light" placement="bottom">
          <template slot="content">
            <div v-for="b in plataforma.blockchains" :key="b.id" style="padding: 5px"> 
              {{ b.idBlockchain.nome }}
            </div>
          </template>
          <span class="tipo-card-blockchains">
            <font-awesome-icon icon="layer-group"></font-awesome-icon>
            Blockchains <font-awesome-icon icon="chevron-down"></font-awesome-icon>
          </span>
        </el-tooltip>

        <!-- Imagem -->
        <el-image class="img-card" :src="imageUrl(plataforma.imagem)" />
      </div>

      <!-- Texto -->
      <div class="text-card">
        <div class="title-card">
          <font-awesome-icon class="color-red mr-5px" icon="thumbtack"/> {{plataforma.nome}}
        </div>
        <div class="descricao-card">
          {{plataforma.descricao}}
        </div>
      </div>
    </div>

    <!-- Website -->
    <div class="card-btn">
      <el-button type="text" @click="findWebsite()"> 
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

    public findWebsite(): void {
      let link = '';
      this.plataforma.links.forEach((element) => {
        if (element.nome === 'Website') {
          link = element.url;
        }
      });
      if (link !== '') {
        this.openWebsite(link);
      }
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
</style>