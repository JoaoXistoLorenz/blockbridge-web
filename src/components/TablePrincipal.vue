<template>
  <el-card :body-style="{ padding: '20px' }">
    <el-table 
      :data="plataformas" 
      border stripe 
      :tooltip-effect="'light'" 
      empty-text="Nenhuma registro encontrado!"
      @row-dblclick="irParaPlataforma"
      row-class-name="pointer"
      :header-cell-style="{ background: '#F5F7FA'}"
    >
      <!-- Id -->
      <el-table-column v-if="getAdmin" prop="id" label="Id" align="center" :show-overflow-tooltip="true" width="80px"></el-table-column>
      
      <!-- Imagem -->
      <el-table-column prop="imagem" label="Logo" align="center" :show-overflow-tooltip="true" width="150px">
        <template slot-scope="props">
          <el-image class="img-table" :src="imageUrl(props.row.imagem)"/>
        </template>
      </el-table-column>

      <!-- Nome -->
      <el-table-column prop="nome" label="Nome" :show-overflow-tooltip="true" width="200px">
        <template slot-scope="props">
          <h3 class="ml-5px">
            {{props.row.nome}} 
          </h3>
        </template>
      </el-table-column>

      <!-- Descirção -->
      <el-table-column prop="descricao" label="Descrição" min-width="100px">
        <template slot-scope="props">
          <div class="descricao-table ml-5px">{{props.row.descricao}}</div>
        </template>
      </el-table-column>

      <!-- Tipo -->
      <el-table-column prop="tipo" label="Tipo" :show-overflow-tooltip="true" width="160px">
        <template slot-scope="props">
          <h4>
            <el-tag type="warning" style="width: 100%">
              <font-awesome-icon class="mr-5px color-orange" icon="circle-info"/>
                {{ props.row.tipoEscalabilidade?.id ? 
                  findTipoEscalabilidade(parseInt(props.row.tipoEscalabilidade.id)) : 
                  findTipoMenu(parseInt(props.row.tipoMenu.id))
                }}
            </el-tag>
          </h4>
        </template>
      </el-table-column>

      <!-- Blockchains -->
      <el-table-column  :show-overflow-tooltip="true" label="Blockchains" width="140px">
        <template slot-scope="props">
          <el-tooltip effect="light" placement="bottom">

            <!-- Tooltip -->
            <template slot="content">
              <div v-for="b in props.row.blockchains" :key="b.id" style="padding: 5px"> 
                {{ b.idBlockchain.nome }}
              </div>
            </template>

            <!-- Texto -->
            <h4>
              <el-tag style="width: 100%" class="tag-green">
                <font-awesome-icon icon="layer-group"></font-awesome-icon>
                 Blockchains <font-awesome-icon icon="chevron-down"></font-awesome-icon>
              </el-tag>
            </h4>
          </el-tooltip>
        </template>
      </el-table-column>

      <!-- Website -->
      <el-table-column v-if="!getAdmin" align="center" label="Website" :show-overflow-tooltip="true" width="160px">
        <template slot-scope="props">
          <el-button type="text" @click="findWebsite(props.row)"> 
            Visite website <font-awesome-icon icon="right-to-bracket"/>
          </el-button>
        </template>
      </el-table-column>

      <!-- Delete -->
      <el-table-column v-if="getAdmin" align="center" label="Excluir" :show-overflow-tooltip="true" width="120px">
        <template slot-scope="props">
          <el-popconfirm
            confirm-button-text='Sim'
            cancel-button-text='Não'
            icon="el-icon-info"
            icon-color="red"
            title="Você tem certeza que deseja excluir esse registro?"
            @confirm="deleteRow(props.row)"
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
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { TiposEscalabilidade, TipoMenu } from '../utils/enum';

  @Component({
    name: 'TablePrincipal',
  })

  export default class TablePrincipal extends Vue {
    
    @Prop()
    public plataformas!: any;

    @Prop({default: false})
    public admin;

    public get getAdmin(): boolean {
      return this.admin;
    }

    public imageUrl(img: string): any {
      return require(`@/assets/${img}`);
    }

    public openWebsite(url: string): void {
      window.open(url, "_blank");
    }

    // eslint-disable-next-line
    public findWebsite(row: any): void {
      let link = '';
      row.links.forEach((element) => {
        if (element.nome === 'Website') {
          link = element.url;
        }
      });
      if (link !== '') {
        this.openWebsite(link);
      }
    }

    public findTipoEscalabilidade(num: number): string {
      return TiposEscalabilidade[num].toString();
    }

    public findTipoMenu(num: number): string {
      return TipoMenu[num].toString();
    }

    // eslint-disable-next-line
    public irParaPlataforma(row: any): void {
      if (!this.admin) {
        this.$router.push({ path: `/plataforma/${row.id}`, replace: true });
      } else {
        this.$emit('edt', row);
      }
    }

    // eslint-disable-next-line
    public async deleteRow(row: any): Promise<void> {
      this.$emit('del', row);
    }

  }
</script>

<style scoped lang="scss">
</style>