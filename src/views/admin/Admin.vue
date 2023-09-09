<template>
  <el-row>
    <TopbarAdmin :page="1"/>
    <BackTop/>
    <el-main ref="main" class="main">

      <!-- Titulo -->
      <div class="titulo-principal mt-0px">
        Sugestões de Melhorias!
        <div class="titulo-secundario">
          <font-awesome-icon icon="user-plus" class="color-principal"/>
          Portal do administrador!
        </div>
      </div>

      <!-- Tabela -->
      <el-row>
        <el-col :span="24" class="admin-sugestao">
          <el-card :body-style="{ padding: '20px' }">
            <el-table 
              :data="dataTable" 
              tooltip-effect="light" 
              empty-text="Nenhuma sugestão encontrada!" 
              :header-cell-style="{ background: '#F5F7FA'}" 
              border
            > 

              <!-- Descrição -->
              <el-table-column type="expand">
                <template slot-scope="props">
                  <div class="admin-text-card">
                    <div class="bold mb-15px"> 
                      <font-awesome-icon icon="info-circle" class="admin-descricao"/> DESCRIÇÃO:
                    </div>
                    {{ props.row.descricao }}
                  </div>
                </template>
              </el-table-column>

              <!-- Id -->
              <el-table-column label="ID" sortable prop="id" width="80px" :show-overflow-tooltip="true"/>
              
              <!-- Titulo -->
              <el-table-column label="Título" sortable prop="titulo" :show-overflow-tooltip="true"/>

              <!-- URL -->
              <el-table-column label="URL" sortable prop="url" :show-overflow-tooltip="true">
                <template slot-scope="props">
                  <font-awesome-icon v-if="!props.row.url" icon="triangle-exclamation" class="color-orange"/>
                  <font-awesome-icon v-else class="pointer color-blue" icon="copy" @click="copiar(props.row.url)"/>
                  {{ props.row.url ?  props.row.url : 'Sem URL'}}
                </template>
              </el-table-column>

              <!-- IP -->
              <el-table-column label="IP" sortable prop="ip" width="150px" :show-overflow-tooltip="true"/>

              <!-- Data -->
              <el-table-column label="Data" sortable prop="data" width="200px" :show-overflow-tooltip="true">
                <template slot-scope="props">
                  {{ props.row.data | Mask('DATETIME')}}
                </template>
              </el-table-column>

              <!-- Tipo -->
              <el-table-column label="Tipo" sortable prop="tipo" :show-overflow-tooltip="true" width="200px">
                <template slot-scope="props">
                  {{ showTipo(props.row.tipo)}}
                </template>
              </el-table-column>

              <!-- Excluir -->
              <el-table-column label="Excluir" prop="url" align="center" :show-overflow-tooltip="true" width="120px">
                <template slot-scope="props">
                  <el-popconfirm
                    confirm-button-text='Sim'
                    cancel-button-text='Não'
                    icon="el-icon-info"
                    icon-color="red"
                    title="Você tem certeza que deseja excluir esse registro?"
                    @confirm="deleteRow(props.row.id)"
                  >
                    <template slot="reference">
                      <el-tag type="danger" style="width: 100%" class="bold pointer">
                        <font-awesome-icon icon="trash"/> 
                        Excluir
                      </el-tag>
                    </template>
                  </el-popconfirm>
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
  import TopbarAdmin from '../../components/TopbarAdmin.vue';
  import BackTop from '../../components/BackTop.vue';

  @Component({
    name: 'Admin',
    components: {TopbarAdmin, BackTop}
  })

  export default class Admin extends Vue {
    public dataTable: any = [];

    public async setDataTable(): Promise<void> {
      const ret: any = await this.$axios.get(`/melhoria`);
      if (ret.success) {
        this.dataTable = ret.data;
      }
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

    /* Fazer verificação na hora de excluir */
    public async deleteRow(id: number): Promise<void> {
      await this.$axios.delete(`/melhoria/${id}`);
      await this.setDataTable();
    }
         
    public created(): any {
      this.setDataTable();
    }
  }
</script>

<style lang="scss">
</style>
