<template>
  <el-row v-if="model.id">
    <BackTop/>
    <Topbar/>
    <el-main ref="main" class="main">
      <!-- Titulo -->
      <div class="titulo-principal" style="margin-bottom: 40px">
        Descubra uma nova tecnologia!
        <div class="titulo-secundario">
          <font-awesome-icon icon="circle-question" class="color-principal"/>
          Encontre as principais informações sobre a plataforma {{ model.nome }}! 
        </div>
      </div>
      
      <el-row style="margin-left: 50px; margin-right:50px">
        <!-- Imagem -->
        <el-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
          <el-card class="card-plataforma" :body-style="{ padding: '0px'}">
            <div class="center titulo-plataforma">
              <span class="tipo-card" >
                {{ model.tipoEscalabilidade.id ? findTipoEscalabilidade(parseInt(model.tipoEscalabilidade.id)) : findTipoMenu(parseInt(model.tipoMenu.id))}}
              </span>
              <el-image class="img-card" :src="imageUrl(model.imagem)"/> 
              <div> {{ model.nome }} </div>
               <el-button class="mt-5px mr-5px btn-scalability-ativo" style="width: 90%; margin-top: 30px; margin-bottom: 15px" @click="navegarPara(model.urlsite)">
                Ir para o site <font-awesome-icon icon="right-to-bracket"/>
              </el-button>
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

        <!-- Redes Sociais -->
        <el-col :span="24">
          <el-card class="card-plataforma-under" :body-style="{ padding: '15px' }">
            <el-row>
              <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlgit)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urlgit? 'disabled-rede-social' : ''" @click="navegarPara(model.urlgit)">
                   <el-image :src="'https://cdn.sanity.io/files/zg5gx8g4/production/f15df31eeb55fc3ec17515c97c7a6150affeb89f.svg'"></el-image>
                    <div>Github</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldoc)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urldoc ? 'disabled-rede-social' : ''">
                    <div class="rede-social-div">
                      <font-awesome-icon icon="file-lines" class="color-white"/>
                    </div>
                    <div>Documentação</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlinsta)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urlinsta ? 'disabled-rede-social' : ''">
                   <el-image :src="'https://cdn.sanity.io/files/zg5gx8g4/production/1fbc0148b6d709ccb6b48c2aa6788a245d2f98cf.svg'"></el-image>
                    <div>Instagram</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltel)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urltel ? 'disabled-rede-social' : ''">
                    <el-image :src="'https://cdn.sanity.io/files/zg5gx8g4/production/bf51160fa79f07afc49d9cdf406f7bc6b6ae88df.svg'"></el-image>
                    <div>Telegram</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltwt)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urltwt ? 'disabled-rede-social' : ''">
                    <el-image :src="'https://cdn.sanity.io/files/zg5gx8g4/production/e571358b3ad2230ec0e9f462a2c5c605c65d0ff7.svg'"></el-image>
                    <div>Twitter</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldisc)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urldisc ? 'disabled-rede-social' : ''">
                    <el-image :src="'https://cdn.sanity.io/files/zg5gx8g4/production/4c44e7afd38b46cf0d2c693b63ef9ec34f782eca.svg'"></el-image>
                    <div>Discord</div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- Ferramentas -->
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-card class="card-plataforma-under" :body-style="{ padding: '15px' }">
            <el-row>
              <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div @click="navegarPara(model.urlcap)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urlcap? 'disabled-rede-social' : ''" >
                   <el-image :src="imageUrl('coinmarketcap.png')"></el-image>
                    <div>Coinmarketcap</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div @click="navegarPara(model.urltrading)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urltrading ? 'disabled-rede-social' : ''">
                   <el-image :src="imageUrl('tradingview.png')"></el-image>
                    <div>Tradingview</div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- Corretoras -->
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-card class="card-plataforma-under" :body-style="{ padding: '15px' }">
            <el-row>
              <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div @click="navegarPara(model.urlbinance)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urlbinance? 'disabled-rede-social' : ''">
                   <el-image :src="imageUrl('binance.png')"></el-image>
                    <div>Binance</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <div @click="navegarPara(model.urlcoinbase)">
                  <el-card :shadow="'never'" class="rede-social" :class="!model.urlcoinbase? 'disabled-rede-social' : ''">
                   <el-image :src="imageUrl('coinbase.svg')"></el-image>
                    <div>Coinbase</div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- Tecnologia Semelhante -->
        <el-col v-if="plataformas.length > 0" :span="24" style="margin-top: 60px" class="titulo center">
          Encontre outra tecnologia semelheante!
        </el-col>

        <!-- Outras tecnologias -->
        <el-col v-if="plataformas.length > 0" :span="24" style="padding-top: 60px; padding-bottom: 10px">
          <el-col v-for="plataforma in plataformas" :key="plataforma.id" class="p-10px" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <CardPrincipal :plataforma="plataforma" :isPlataforma="setPlataformaValue" @atualizaPlataforma="atualizaPlataforma"/>
          </el-col>
          <SemDados v-if="plataformas.length === 0" class="sem-dados"/>
        </el-col>

        <!-- Tecnologia Semelhante -->
        <el-col :span="24" style="padding-top: 40px;" class="titulo center">
          Explore outras Áreas!
        </el-col>

        <el-col :span="24" style="padding-top: 60px; padding-bottom: 10px">
          <Areas :page="1"/>
        </el-col>
      </el-row>
    </el-main>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import CardPrincipal from '../components/CardPrincipal.vue';
  import BackTop from '../components/BackTop.vue';
  import Topbar from '../components/Topbar.vue';
  import SemDados from '../components/SemDados.vue';
  import Areas from '../components/Areas.vue';
  import { TiposEscalabilidade, TipoMenu } from '../utils/enum';

  @Component({
    name: 'Plataforma',
    components: {Topbar, CardPrincipal, BackTop, SemDados, Areas}
  })

  export default class Plataforma extends Vue {
    public plataformas: any = [];
    public model: any = {};

    public imageUrl(img: string): any {
      return  require(`@/assets/${img}`);
    }

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

    public async created(): Promise<any> {
      await this.loadingPage();
    }
  }

</script>

<style lang="scss">

.title-card {
  font-weight: 900;
  font-size: 1.2rem;
}

.title-secundario-card {
  font-weight: 900;
  font-size: 1rem;
  color: #6B7280;
}

.text-card-plataforma {
  text-align: justify;
  margin-top: 10px;
  line-height: 25px;
}

.tipo-card {
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: bold;
  font-size: 11px;
  color: white;
  background: orange;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 2px;
  border-radius: 10px;
}


</style>
