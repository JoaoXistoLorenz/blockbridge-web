<template>
  <el-row v-loading="loading">
    <Topbar :page="tipoMenu"/>
    <BackTop/>
    <el-main ref="main" class="main">

      <!-- Titulo -->
      <div class="titulo-principal">
        NFTs
        <div class="titulo-secundario">
          <font-awesome-icon icon="cubes" class="color-principal"/>
          Encontre os principais Projetos NFT!
        </div>
      </div>

      <!-- Filtros -->
      <el-row class="filters-row">

        <!-- Botões -->
        <el-radio-group class="radio-btn mb-10px" v-model="tipoLista" size="mini" fill="#635DFF">
          <el-radio-button :label="1">
            <font-awesome-icon icon="table-cells-large"/>
          </el-radio-button>
          <el-radio-button :label="2">
            <font-awesome-icon icon="list"/>
          </el-radio-button>
        </el-radio-group>

        <el-card :body-style="{ padding: '20px' }">
          <el-row class="row-primary-filter">

            <!-- Search -->
            <el-row class="row-input-search">
              <div class="filtro">
                Filtre por uma plataforma:
              </div>
              <el-input placeholder="Procure uma plataforma!" v-model="inputProcurar" @input="procularSolucao()">
                <el-button slot="prepend">
                  <font-awesome-icon icon="search" class="color-principal"/>
                </el-button>
              </el-input>
            </el-row>

            <!-- Blockchain -->
            <el-row class="row-blockchain">
              <div class="filtro"> 
                Filtre por uma Blockchain:
              </div>
              <el-select v-model="blockchain" @change="procularSolucao()" placeholder="Filtre por uma Blockchain" style="width:100%">
                <el-option
                  v-for="blockchain in blockchains"
                  :key="blockchain.id"
                  :label="blockchain.nome"
                  :value="blockchain.id">
                </el-option>
              </el-select>
            </el-row>
          </el-row>
        </el-card>
      </el-row>

      <!-- Cards -->
      <el-row class="cards-row">
        <el-row v-if="plataformas.length > 0">

          <!-- Card -->
          <el-row v-if="tipoLista === 1">
            <el-col v-for="plataforma in plataformas" :key="plataforma.id+'plataforma'" class="p-10px" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
              <CardPrincipal :plataforma="plataforma"/>
            </el-col>
          </el-row>

          <!-- Table -->
          <el-row v-if="tipoLista === 2" style="margin: 10px">
            <TablePrincipal :plataformas="plataformas"></TablePrincipal>
          </el-row>
        </el-row>

        <!-- Sem dados -->
        <SemDados v-else class="sem-dados"/>
      </el-row>
    </el-main>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import CardPrincipal from '../components/CardPrincipal.vue';
  import TablePrincipal from '../components/TablePrincipal.vue';
  import BackTop from '../components/BackTop.vue';
  import Topbar from '../components/Topbar.vue';
  import SemDados from '../components/SemDados.vue';
  import { Blockchains } from '../utils/enum';

  @Component({
    name: 'Nfts',
    components: {Topbar, CardPrincipal, BackTop, SemDados, TablePrincipal}
  })

  export default class Nfts extends Vue {
    public loading = true;
    public inputProcurar = '';
    public blockchain = 1000;

    public blockchains: any = Object.entries(Blockchains).map(([key, value]) => ({ id: parseInt(key), nome: value }) as any );
    public tipoLista = 1;
    public tipoMenu = 5;

    public plataformasImutavel: any = [];
    public plataformas: any = [];

    public async setPlataformas(): Promise<void> {
      const ret: any = await this.$axios.get(`/plataforma/menu/${this.tipoMenu}`);
      if (ret.success) {
        this.plataformasImutavel = ret.data;
        this.plataformas = ret.data;
      }
    }

    public filtrarPorBlockchain(): void {
      if (this.blockchain !== 1000) {
        const plataformaAux: any = [];
        for (let index = 0; index < this.plataformas.length; index++) {
          const element: any = this.plataformas[index];
          element.blockchains.forEach( (e: any) => {
            if (e.idBlockchain.id.toString() === this.blockchain.toString()) {
              plataformaAux.push(element);
            }
          });
        }
        this.plataformas = [...plataformaAux];
      }
    }

    public procularSolucao(): void {
      if (this.inputProcurar !== '') {
        this.plataformas = this.plataformasImutavel.filter((item: any) => item.nome.toUpperCase().includes(this.inputProcurar.toUpperCase()));
      } else {
        this.plataformas =  [...this.plataformasImutavel];
      }
      this.filtrarPorBlockchain();
    }

    public mounted(): any {
      this.loading = true;
      this.setPlataformas();
      this.loading = false;
    }
  }
</script>

<style lang="scss">
</style>
