<template>
  <el-row>
    <TopbarAdmin :page="2"/>
    <BackTop/>
    <el-main ref="main" class="main">

      <!-- Titulo -->
      <div class="titulo-principal" style="margin-top: 0px">
        Cadastro de Plataformas!
        <div class="titulo-secundario">
          <font-awesome-icon icon="user-plus" class="color-principal"/>
          Portal do administrador!
        </div>
      </div>

      <!-- botões  -->
      <div class="table-page" style="float: right; margin-bottom: 10px">
        <el-button-group v-if="slot === 0">
          <el-button type="primary" class="scalability-btn-ativo" size="medium" @click="add()">
            <font-awesome-icon icon="square-plus" class="mr-5px"/> Adicionar
          </el-button>
        </el-button-group>
        <el-button-group v-if="slot > 0">
          <el-button type="primary" class="scalability-btn-ativo" size="medium" @click="save()">
            <font-awesome-icon icon="save" class="mr-5px"/>Salvar
          </el-button>
          <el-button type="danger" size="medium" @click="back()">
            <font-awesome-icon icon="circle-left" class="mr-5px"/>Voltar
          </el-button>
        </el-button-group>
      </div>

      <!-- Componentes -->
      <div class="table-page">
        <el-col :span="24" v-if="slot === 0">
          <TablePrincipal :plataformas="dataTable" :admin="admin" @edt="edt" @del="del"></TablePrincipal>
        </el-col>
        <el-col :span="24" v-if="slot > 0">
          <FormPlataforma ref="formPlataforma" v-model="model"></FormPlataforma>
        </el-col>
      </div>
    </el-main>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue, Ref} from 'vue-property-decorator';
  import TopbarAdmin from '../../components/TopbarAdmin.vue';
  import TablePrincipal from '../../components/TablePrincipal.vue';
  import FormPlataforma from '../../components/FormPlataforma.vue';
  import BackTop from '../../components/BackTop.vue';
  import { DefaultLinks } from '../../utils/enum';

  @Component({
    name: 'CadastroPlataforma',
    components: {TopbarAdmin, TablePrincipal, FormPlataforma, BackTop}
  })

  export default class CadastroPlataforma extends Vue {
    public dataTable: any = [];
    public admin = true;
    public slot = 0;
    public model: any = {};

    @Ref()
    private readonly formPlataforma!: any;

    public resetModel(): void {
      this.model = {
        id: null,
        nome: '',
        descricao: '',
        imagem: '',
        tipoMenu: 1,
        tipoEscalabilidade: null,
        blockchains: [],
        links: [],
        urlsite: 'www.google.com',
        urlgit: 'www.google.com',
        urldoc: 'www.google.com',
      }
    }

    public async setDataTable(): Promise<void> {
      const ret: any = await this.$axios.get(`/plataforma`);
      if (ret.success) {
        this.dataTable = ret.data;
      }
    }

    public back(): void {
      this.setDataTable();
      this.resetModel();
      this.up();
      this.slot = 0;
    }

    public checkLinks(): boolean {
      let save = true;
      for (let index = 0; index < this.model.links.length; index++) {
        const element = this.model.links[index];
        if (element.url === '') {
          save = false;
          this.$notify({
            title: 'Erro!',
            message: 'Verifique as URLs dos Links!',
            type: 'error'
          });
          break;
        }
        if (element.tipo === 1 && element.imagem === '') {
          save = false;
          this.$notify({
            title: 'Erro!',
            message: 'Imagem obrigatória no tipo Imagem!',
            type: 'error'
          });
          break;
        }
        if (element.tipo === 2 && (element.icone === '' || element.bg === '' || element.color == '')) {
          save = false;
          this.$notify({
            title: 'Erro!',
            message: 'Verifique os campos do tipo Icone',
            type: 'error'
          });
          break;
        }
      }
      return save;
    }

    public async save(): Promise<void> {
      try {
        const canSave = await this.formPlataforma.checkCanSave();
        if (!canSave) {
          this.$notify({
            title: 'Erro!',
            message: 'Preencha os campos corretamente!',
            type: 'error'
          });
          return;
        }
        const linksCanSave = this.checkLinks(); 
        if (!linksCanSave) return;
        let response: any;
        if (this.slot === 1) {
          response = await this.$axios.post('/plataforma', this.model);
        } else {
          response = await this.$axios.patch(`/plataforma/${this.model.id}`, this.model);
        }
        if (response.success) {
          this.$notify({
            title: 'Sucesso!',
            message: 'Plataforma salva com sucesso!',
            type: 'success'
          });
          this.back();
        } else {
          throw new Error('Erro ao registrar/atualizar Plataforma');
        }
      } catch (error) {
        this.$notify({
          title: 'Erro!',
          message: 'Erro ao registrar/atualizar Plataforma!',
          type: 'error'
        });
      }
    }


    public setDefaultLinks(): void {
      this.model.links = JSON.parse(JSON.stringify(DefaultLinks));
      this.$forceUpdate();
    }

    public add(): void {
      this.resetModel();
      this.setDefaultLinks();
      this.up();
      this.slot = 1;
    }

    // eslint-disable-next-line
    public edt(row: any): void {
      this.model = {...row};
      this.model.tipoMenu = parseInt(row.tipoMenu.id);
      this.model.tipoEscalabilidade = parseInt(row.tipoEscalabilidade?.id) || null;
      this.up();
      this.slot = 2;
    }

    // eslint-disable-next-line
    public async del(row: any): Promise<void> {
      try {
        const response: any = await this.$axios.delete(`/plataforma/${row.id}`);
        if (response.success) {
          this.$notify({
            title: 'Sucesso!',
            message: 'Plataforma removida com sucesso!',
            type: 'success'
          });
          this.back();
        } else {
          throw new Error('Erro ao excluir Plataforma');
        }
      } catch (error) {
        this.$notify({
          title: 'Erro!',
          message: 'Erro ao excluir Plataforma',
          type: 'error'
        });
      }
    }

    public up(): void {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    public created(): any {
      this.back();
    }
  }
</script>

<style lang="scss">

.table-page {
  margin-top: 10px;
  padding-left: 50px;
  padding-right: 50px;
}

</style>
