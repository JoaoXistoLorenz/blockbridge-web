<template>
  <el-row v-loading="loading">
    <Topbar :page="5"/>
    <BackTop/>
    <el-main ref="main" class="main">

      <!-- Titulo -->
      <div class="titulo-principal">
        Parachains
        <div class="titulo-secundario">
          <font-awesome-icon icon="cubes" class="color-principal"/>
          Encontre as principais Parachains da Polkadot!
        </div>
      </div>

      <!-- Filtros -->
      <el-row class="filters-row-dex">
        <el-radio-group v-model="tipolista" size="mini" style="margin-bottom: 10px" fill="#635DFF">
          <el-radio-button :label="1">
            <font-awesome-icon icon="table-cells-large"/>
          </el-radio-button>
          <el-radio-button :label="2">
            <font-awesome-icon icon="list"/>
          </el-radio-button>
        </el-radio-group>
        <el-card :body-style="{ padding: '20px' }">
          <el-row class="row-primary-filter">
            <el-row class="row-input-search">
              <div class="filtro">
                Filtre por uma plataforma:
              </div>
              <el-input placeholder="Procure uma plataforma!" v-model="procurar" @input="procularSolucao()">
                <el-button slot="prepend">
                  <font-awesome-icon icon="search" class="color-principal"/>
                </el-button>
              </el-input>
            </el-row>
          </el-row>
        </el-card>
      </el-row>

      <!-- Cards -->
      <el-row class="cards-row">
        <el-row v-if="tipolista === 1">
          <el-col v-for="plataforma in plataformas" :key="plataforma.id+'plataforma'" class="p-10px" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
            <CardPrincipal :plataforma="plataforma"/>
          </el-col>
        </el-row>
        <el-row v-if="tipolista === 2 && plataformas.length > 0" style="margin: 10px">
          <TablePrincipal :plataformas="plataformas"></TablePrincipal>
        </el-row>
        <SemDados v-if="plataformas.length === 0" class="sem-dados"/>
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
    name: 'Parachain',
    components: {Topbar, CardPrincipal, BackTop, SemDados, TablePrincipal}
  })

  export default class Parachain extends Vue {
    public loading = true;
    public procurar = '';
    public blockchain = 1;
    public plataformasImutavel: any = [];
    public plataformas: any = [];
    public blockchains: any = Object.entries(Blockchains).map(([key, value]) => ({ id: parseInt(key), nome: value }) as any );
    public tipolista = 1;

    public setPlataformas() {
      const plataforma1: any = {
        id: 1,
        tipo: 2,
        imagem: 'cartesi.webp',
        nome: 'Cartesi',
        descricao: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        url: 'https://www.google.com',
      }
      const plataforma2: any = {
        id: 2,
        tipo: 4,
        imagem: 'op.png',
        nome: 'Optimism',
        descricao: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        url: 'https://www.google.com',
      }

      const plataforma3: any = {
        id: 3,
        tipo: 4,
        imagem: 'op.png',
        nome: 'Arbitrum',
        descricao: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
        url: 'https://www.google.com',
      }

      this.plataformasImutavel.push(plataforma1);
      this.plataformasImutavel.push(plataforma2);
      this.plataformasImutavel.push(plataforma3);
      this.plataformas.push(plataforma1);
      this.plataformas.push(plataforma2);
      this.plataformas.push(plataforma3);
    }

    public procularSolucao() {
      this.blockchain = 1;
      if (this.procurar !== '') {
        this.plataformas = this.plataformasImutavel.filter((item: any) => item.nome.toUpperCase().includes(this.procurar.toUpperCase()));
      } else {
        this.plataformas =  [...this.plataformasImutavel];
      }
    }

    public mounted() {
      this.loading = true;
      this.setPlataformas();
      this.loading = false;
    }
  }
</script>

<style lang="scss">
.filtro {
  padding-bottom: 10px;
  font-weight: bold;
}
</style>
