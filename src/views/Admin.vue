<template>
  <el-row>
    <TopbarAdmin :page="1"/>
    <el-main ref="main" class="main">

      <!-- Titulo -->
      <div class="titulo-principal" style="margin-top: 0px">
        Sugestões de Melhorias!
        <div class="titulo-secundario">
          <font-awesome-icon icon="user-plus" class="color-principal"/>
          Portal do administrador!
        </div>
      </div>

      <el-row>
        <el-col :span="24" class="sugestao">
          <el-card :body-style="{ padding: '20px' }">
            <el-table :data="dataTable" style="width: 100%" :tooltip-effect="'light'" empty-text="Nenhuma sugestão encontrada!" :header-cell-style="{ background: '#F5F7FA'}" border>
              <el-table-column type="expand">
                <template slot-scope="props">
                  <div class="text-card-plataforma" style="padding: 40px; padding-left: 140px; background: #F5F7FA">
                    <div style="font-weight: bold; margin-bottom: 15px"> 
                       <font-awesome-icon icon="info-circle" style="color: blue; font-size: 15px"/> DESCRIÇÃO:
                    </div>
                    {{ props.row.descricao }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="ID" sortable prop="id" width="80px" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column label="Título" sortable prop="titulo" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column label="URL" sortable prop="url" :show-overflow-tooltip="true">
                <template slot-scope="props">
                  <font-awesome-icon v-if="!props.row.url" icon="triangle-exclamation" style="color: orange;"/>
                  <font-awesome-icon v-else class="pointer" icon="copy" style="color: blue;" @click="copiar(props.row.url)"/>
                  {{ props.row.url ?  props.row.url : 'Sem URL'}}
                </template>
              </el-table-column>
              <el-table-column label="IP" sortable prop="ip" width="150px" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column label="Data" sortable prop="data" width="200px" :show-overflow-tooltip="true">
                <template slot-scope="props">
                  {{ props.row.data | Mask('DATETIME')}}
                </template>
              </el-table-column>
              <el-table-column label="Tipo" sortable prop="tipo" :show-overflow-tooltip="true" width="200px">
                <template slot-scope="props">
                  {{ showTipo(props.row.tipo)}}
                </template>
              </el-table-column>
              <el-table-column label="Excluir" prop="url" align="center" :show-overflow-tooltip="true" width="80px">
                <template slot-scope="props">
                    <font-awesome-icon icon="trash" class="pointer" style="color:red" @click="deleteRow(props.row.id)"/>
                    <span class="ml-5px pointer" style="color: red" @click="deleteRow(props.row.id)">Excluir</span>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>

    </el-main>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TopbarAdmin from '../components/TopbarAdmin.vue';
  import moment from 'moment';

  @Component({
    name: 'Admin',
    components: {TopbarAdmin}
  })

  export default class Admin extends Vue {
    public dataTable: any = [];

    public setDataTable(): void {
      this.dataTable = [
        {
          id: 1,
          titulo: 'Melhoria Interface',
          tipo: 2,
          url: '',
          ip: '172.168.10.1',
          data: moment().format('YYYY-MM-DD HH:mm:ss'),
          descricao: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        }, 
        {
          id: 2,
          titulo: 'Adcionar plataforma 1',
          tipo: 1,
          url: 'www.google.com',
          ip: '172.168.10.1',
          data: moment().format('YYYY-MM-DD HH:mm:ss'),
          descricao: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },
        {
          id: 3,
          titulo: 'Adcionar plataforma 1',
          tipo: 1,
          url: 'www.google.com',
          ip: '172.168.10.1',
          data: moment().format('YYYY-MM-DD HH:mm:ss'),
          descricao: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        }, 
        {
          id: 4,
          titulo: 'Adcionar plataforma 1',
          tipo: 1,
          url: 'www.google.com',
          ip: '172.168.10.1',
          data: moment().format('YYYY-MM-DD HH:mm:ss'),
          descricao: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },
        {
          id: 5,
          titulo: 'Melhoria Interface',
          tipo: 2,
          url: '',
          ip: '172.168.10.1',
          data: moment().format('YYYY-MM-DD HH:mm:ss'),
          descricao: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        }, 
        {
          id: 6,
          titulo: 'Adcionar plataforma 1',
          tipo: 1,
          url: 'www.google.com',
          ip: '172.168.10.1',
          data: moment().format('YYYY-MM-DD HH:mm:ss'),
          descricao: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the e printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },
      ] as any;
    }

    public showTipo(tipo: number): string {
      if (tipo === 1) return 'Sugestão de Plataforma';
      return 'Sugestão de Melhoria';
    }

    public async copiar(url: string): Promise<void> {
      try {
        await navigator.clipboard.writeText(url);
        this.$notify({
          title: 'Sucesso!',
          message: 'URL copiada com sucesso!',
          type: 'success'
        });
      } catch {
        this.$notify({
          title: 'Falha!',
          message: 'Erro ao copiar URL!',
          type: 'warning'
        });
      }
    }

    public deleteRow(id: number): void {
      console.log(id)
    }
         
    public created(): any{
      this.setDataTable();
    }
  }

// criar crud plataforma
// refatorar codigo (arrumar menu)
// responsividade
// github
// tvl, preço se tiver token, video
</script>

<style lang="scss">

.sugestao {
  margin-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

.blue-type {
  color: #635DFF;
  border: 1px solid #b3e5fc;
}

.green-type {
  color: #43a047;
  background: #e8f5e9;
  border: 1px solid #c8e6c9;
}


</style>
