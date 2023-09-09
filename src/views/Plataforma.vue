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

        <!-- Links -->
        <el-col :span="24">
          <el-card class="card-plataforma-under" :body-style="{ padding: '15px' }">
            <el-row>
              <el-col v-for="link in model.links" :key="link.id" :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <Link :link="link"/>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <!-- Tecnologia Semelhante -->
        <el-col v-if="plataformas.length > 0" :span="24" class="titulo center plataforma-pt-60px">
          Encontre outra tecnologia semelheante!
        </el-col>

        <!-- Outras tecnologias -->
        <el-col v-if="plataformas.length > 0" :span="24" class="pb-10px plataforma-pt-60px">
          <el-col v-for="plataforma in plataformas" :key="plataforma.id" class="p-10px" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <CardPrincipal :plataforma="plataforma" :isPlataforma="setPlataformaValue" @atualizaPlataforma="atualizaPlataforma"/>
          </el-col>
          <SemDados v-if="plataformas.length === 0" class="sem-dados"/>
        </el-col>

        <!-- Explore outras Áreas -->
        <el-col :span="24" class="titulo center plataforma-pt-40px">
          Explore outras Áreas!
        </el-col>

        <!-- Areas -->
        <el-col :span="24" class="plataforma-pt-60px pb-10px">
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
  import Link from '../components/Link.vue';
  import { TiposEscalabilidade, TipoMenu } from '../utils/enum';

  @Component({
    name: 'Plataforma',
    components: {Topbar, CardPrincipal, BackTop, SemDados, Areas, Link}
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
</style>
