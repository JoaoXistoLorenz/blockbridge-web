
<template>
  <el-row>
    <BackTop/>
    <Topbar/>
    <el-main ref="main" class="main" v-if="model.id">

      <!-- Titulo -->
      <div class="titulo-principal plataforma-mb-40px">
        Descubra uma nova tecnologia!
        <div class="titulo-secundario">
          <font-awesome-icon icon="circle-question" class="color-principal"/>
          Encontre as principais informações sobre a plataforma {{ model.nome }}! 
        </div>
      </div>
      
      <el-row class="plataforma-row">
        <!-- Imagem -->
        <el-row>
          <el-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
            <el-card class="card-plataforma" :body-style="{ padding: '0px' }">
              <div class="center titulo-plataforma">
                <span class="tipo-card-plataforma" >
                  {{ model.tipoEscalabilidade.id ? findTipoEscalabilidade(parseInt(model.tipoEscalabilidade.id)) : findTipoMenu(parseInt(model.tipoMenu.id))}}
                </span>
                <el-image class="img-card" :src="imageUrl(model.imagem)"/> 
                <div> {{ model.nome }} </div>
              </div>
            </el-card>
          </el-col>

          <!-- Descrição -->
          <el-col :xs="24" :sm="24" :md="18" :lg="16" :xl="16">
            <el-card class="card-plataforma-right" :body-style="{ padding: '25px' }">
              <div class="title-card">Informações Gerais</div>
              <div class="text-card-plataforma">
                {{ model.descricao }}
              </div>
              <div class="mt-10px"></div>
              <span class="title-secundario-card mt-15px">Chains:</span> <el-tag v-for="chain in model.blockchains" :key="chain.id" type="primary" class="mt-10px bold ml-5px"> {{ chain.idBlockchain.nome }}</el-tag>
            </el-card>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24" class="p-10px">
            <el-card :body-style="{ padding: '20px' }" >
              <div style="border: 1px solid #D9DADB; background: #F5F7FA" class="title-card">
                <div class="mb-20px mt-20px center">Valor Total Bloqueado!</div>
                <iframe width="100%" height="360px" src="https://defillama.com/chart/chain/Arbitrum?" title="DefiLlama" frameborder="0"></iframe>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <!-- <el-col :span="24" class="p-10px">
          <el-card :body-style="{ padding: '20px' }">
            <div style="border: 1px solid #D9DADB">
              <iframe width="100%" height="1200" src="https://tokenterminal.com/terminal/projects/arbitrum/embed/key-metrics" frameborder="0" title="Token Terminal"></iframe>
            </div>
          </el-card>
        </el-col> -->

        <!-- Explore a Tecnologia -->
        <el-row class="titulo center" style="margin-bottom: 60px; margin-top: 60px">
          Obtenha mais informações!
        </el-row>

        <!-- Filtro -->
        <el-row>
          <el-col :span="24" style="padding-top: 10px">
            <el-card :body-style="{ padding: '25px' }" class="ml-10px mr-10px">
              <el-input placeholder="Filtre através do nome da plataforma!" v-model="inputProcurar" @input="procularSolucao()">
                <el-button slot="prepend">
                  <font-awesome-icon icon="search" class="color-principal"/>
                </el-button>
              </el-input>
            </el-card>
          </el-col>
        </el-row>

        <!-- Links -->
        <el-row>
          <el-col :span="24">
            <el-card class="card-plataforma-under" :body-style="{ padding: '15px' }">
              <el-row>
                <el-col v-for="link in links" :key="link.id" :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                  <Link :link="link"/>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        
        <!-- Crypto panic -->
        <el-col v-if="model.cryptopanic" :span="24" style="margin-bottom: 60px;">
          <el-card class="card-plataforma-under" :body-style="{ padding: '15px' }">
            <el-row>
              <CryptoPanic :src="model.cryptopanic"/>
            </el-row>
          </el-card>
        </el-col>

        <el-row v-if="model.idcoinmarketcap" class="titulo center" style="margin-bottom: 60px; margin-top: 60px">
          Informações sobre o token!
        </el-row>

        <el-row v-if="model.idcoinmarketcap">
          <el-col :span="24" class="p-10px">
            <el-card v-if="model.idcoinmarketcap" :body-style="{ padding: '25px' }">
              <div ref="widgetContainer"></div>
            </el-card>
          </el-col>
        </el-row>
        
        <el-row v-if="model.simbolotrading" >
          <el-col :span="24" class="p-10px" >
            <el-card :body-style="{ padding: '20px' }">
              <TradingViewWidget :simbolo="model.simbolotrading"/>
            </el-card>
          </el-col>
        </el-row>

        <el-row class="titulo center" style="margin-bottom: 60px; margin-top: 60px">
          Principais métricas de escalabilidade!
        </el-row>

        <el-row>
          <el-col :span="24" style="padding-top: 20px">
            <el-card class="card-plataforma-under" :body-style="{ padding: '15px' }">
              <el-row>
                <el-col v-for="link in metricasEscalabilidade" :key="link.id" :xs="24" :sm="12" :md="12" :lg="6" :xl="8">
                  <Metricas :link="link"/>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>

        <!-- Tecnologia Semelhante -->
        <el-row v-if="plataformas.length > 0" :span="24" class="titulo center plataforma-pt-60px">
          Encontre outra tecnologia!
        </el-row>

        <!-- Outras tecnologias -->
        <el-row v-if="plataformas.length > 0">
          <el-col :span="24" class="pb-10px plataforma-pt-60px">
            <el-col v-for="plataforma in plataformas" :key="plataforma.id" class="p-10px" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
              <CardPrincipal :plataforma="plataforma" :isPlataforma="setPlataformaValue" @atualizaPlataforma="atualizaPlataforma"/>
            </el-col>
            <SemDados v-if="plataformas.length === 0" class="sem-dados"/>
          </el-col>
        </el-row>

        <!-- Explore outras Áreas -->
        <el-row class="titulo center plataforma-pt-40px">
          Explore outras Áreas!
        </el-row>

        <!-- Areas -->
        <el-row>
          <el-col :span="24" class="plataforma-pt-60px pb-10px">
            <Areas :page="1"/>
          </el-col>
        </el-row>
      </el-row>
    </el-main>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue, Ref} from 'vue-property-decorator';
  import CardPrincipal from '../components/CardPrincipal.vue';
  import BackTop from '../components/BackTop.vue';
  import Topbar from '../components/Topbar.vue';
  import SemDados from '../components/SemDados.vue';
  import Areas from '../components/Areas.vue';
  import Link from '../components/Link.vue';
  import Metricas from '../components/Metricas.vue';
  import TradingViewWidget from '../components/TradingViewWidget.vue';
  import CryptoPanic from '../components/CryptoPanic.vue';
  import { TiposEscalabilidade, TipoMenu } from '../utils/enum';

  @Component({
    name: 'Plataforma',
    components: {Topbar, CardPrincipal, BackTop, SemDados, Areas, Link, Metricas, TradingViewWidget, CryptoPanic}
  })

  export default class Plataforma extends Vue {
    public plataformas: any = [];
    public model: any = {};
    public links: any = [];
    public inputProcurar = '';
    public metricasEscalabilidade: any = [];
    public colors: any = [
      {color: '#f56c6c', percentage: 20},
      {color: '#e6a23c', percentage: 40},
      {color: '#5cb87a', percentage: 60},
      {color: '#1989fa', percentage: 80},
      {color: '#5cb87a', percentage: 100}
    ];

    public imageUrl(img: string): any {
      return require(`@/assets/${img}`);
    }

    @Ref()
    public readonly widgetContainer!: any;

    public async setPlataformas(): Promise<void> {
      this.plataformas = [];
      if (!this.model.id || !this.model.tipoMenu?.id) return;
      const ret: any = await this.$axios.get(`/plataforma/menulimit/${this.model.tipoMenu.id}/${this.model.id}`);
      if (ret.success && ret.data.length) {
        this.plataformas = ret.data;
      }
    }

    public sendToNotFound(): void {
      this.$router.push({ path: `/erro`});
    }

    public async setModel(): Promise<void> {
      this.model = {};
      if (!this.$route?.params?.id) {
        this.sendToNotFound();
      }
      const ret: any = await this.$axios.get(`/plataforma/${this.$route.params.id}`);
      if (ret.success && ret.data?.id) {
        this.model = ret.data;
      } else {
        this.sendToNotFound();
      }
    }

    public navegarPara(url: string): void {
      if (!url) return;
      window.open(url, "_blank");
    }

    public findTipoEscalabilidade(num: number): string {
      return TiposEscalabilidade[num].toString();
    }

    public findTipoMenu(num: number): string {
      return TipoMenu[num].toString();
    }

    public async loadingPage(): Promise<any> {
      await this.setModel();
      await this.setPlataformas();
      this.procularSolucao();
      this.setDataPrice();
      this.addMetricasEscalabilidade();
      this.$forceUpdate();
    }

    public async atualizaPlataforma(id: number): Promise<any> {
      this.$route.params.id = id.toString();
      try {
        this.$router.replace({ path: `/plataforma/${id}`, replace: true });
      } catch { 
        this.$forceUpdate();
      }
      await this.loadingPage();
    }

    public setPlataformaValue(): boolean { 
      return true;
    }

    public procularSolucao(): void {
      if (this.inputProcurar !== '') {
        this.links = this.model.links.filter((item: any) => item.nome.toUpperCase().includes(this.inputProcurar.toUpperCase()));
      } else {
        this.links = [...this.model.links];
      }
    }

    public setDataPrice(): void {
      if (this.model.idcoinmarketcap) {
        const script = document.createElement('script');
        script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
        script.async = true;
        script.onload = () => {
          const widgetContainer = this.widgetContainer;
          if (widgetContainer) {
            const widget = document.createElement('div');
            widget.className = 'coinmarketcap-currency-widget';
            widget.setAttribute('data-currencyid', this.model.idcoinmarketcap);
            widget.setAttribute('data-base', 'USD');
            widget.setAttribute('data-ticker', 'true');
            widget.setAttribute('data-rank', 'true');
            widget.setAttribute('data-marketcap', 'true');
            widget.setAttribute('data-volume', 'true');
            widget.setAttribute('data-statsticker', 'true');
            widget.setAttribute('data-stats', 'USD');
            widgetContainer.appendChild(widget);
          }
        };
        document.head.appendChild(script);
      }
    }


    public addMetricasEscalabilidade(): any {
      this.metricasEscalabilidade = [];
      const auxArray = [
        {
          id: 1000000,
          url: 'https://www.theblock.co/data/scaling-solutions/scaling-overview/value-locked-of-ethereum-scaling-solutions/embed',
          icone: 'cubes',
          bg: '#1B97F3',
          color: 'white',
          nome: 'TVL Escalabilidade',
        },
        {
          id: 1000001,
          url: 'https://www.theblock.co/data/scaling-solutions/scaling-overview/value-locked-of-ethereum-l1-bridges/embed',
          icone: 'bridge-circle-check',
          bg: '#2DBD96',
          color: 'white',
          nome: 'TVL Pontes',
        },
        {
          id: 1000002,
          url: 'https://www.theblock.co/data/scaling-solutions/scaling-overview/value-locked-of-ethereum-plasma-solutions/embed',
          icone: 'chart-column',
          bg: 'black',
          color: 'white',
          nome: 'TVL Plasma',
        },
        {
          id: 1000003,
          url: 'https://www.theblock.co/data/scaling-solutions/scaling-overview/value-locked-of-ethereum-validium-solutions/embed',
          icone: 'chart-line',
          bg: '#4421A5',
          color: 'white',
          nome: 'TVL Validium',
        },
        {
          id: 1000004,
          url: 'https://www.theblock.co/data/scaling-solutions/scaling-overview/value-locked-of-ethereum-optimistic-rollups/embed',
          icone: 'scroll',
          bg: '#1B97F3',
          color: 'white',
          nome: 'TVL Rollups Otimistas',
        },
        {
          id: 1000005,
          url: 'https://www.theblock.co/data/scaling-solutions/scaling-overview/value-locked-of-ethereum-zk-rollups/embed',
          icone: 'file-invoice-dollar',
          bg: '#F0603F',
          color: 'white',
          nome: 'TVL Rollups ZK',
        },
        {
          id: 1000006,
          url: 'https://www.theblock.co/data/scaling-solutions/scaling-overview/ethereum-layer-2-l1-data-fees/embed',
          icone: 'money-bill-trend-up',
          bg: '#1B97F3',
          color: 'white',
          nome: 'Total Taxas L2',
        },
        {
          id: 1000007,
          url: 'https://www.theblock.co/data/scaling-solutions/optimistic-rollups/transaction-count-daily-7dma/embed',
          icone: 'money-bill-transfer',
          bg: 'black',
          color: 'white',
          nome: 'Transações Rollups Oti...',
        },
        {
          id: 1000008,
          url: 'https://www.theblock.co/data/scaling-solutions/optimistic-rollups/daily-new-unique-addresses-for-optimistic-rollups/embed',
          icone: 'address-card',
          bg: 'black',
          color: 'white',
          nome: 'Endereços Rollups Oti...',
        },
        {
          id: 1000009,
          url: 'https://www.theblock.co/data/alternative-crypto-metrics/social/new-weekly-twitter-followers-of-layer-2-solutions/embed',
          icone: 'icons',
          bg: '#1DA1F2',
          color: 'white',
          nome: 'L2 novos seguidores',
        },
        {
          id: 1000010,
          url: 'https://l2fees.info/',
          icone: 'comments-dollar',
          bg: '#2DBD96',
          color: 'white',
          nome: 'Custo Taxas L2',
        }
      ]
      this.metricasEscalabilidade = [...auxArray];
    }

    public async created(): Promise<any> {
      await this.loadingPage();
    }
  }

</script>

<style lang="scss">
  .center-vertical {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>
