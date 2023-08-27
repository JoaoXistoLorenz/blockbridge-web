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
      <el-table-column prop="imagem" align="center" :show-overflow-tooltip="true" width="150px">
        <template slot-scope="props">
          <el-image class="img-table" :src="imageUrl(props.row.imagem)"/>
        </template>
      </el-table-column>
      <el-table-column prop="nome" :show-overflow-tooltip="true" width="200px">
        <template slot-scope="props">
          <h3 class="ml-5px">
             {{props.row.nome}} 
          </h3>
        </template>
      </el-table-column>
      <el-table-column prop="tipo" :show-overflow-tooltip="true" width="200px">
        <template slot-scope="props">
          <h4 class="ml-5px">
            <el-tag type="warning" style="width: 100%">
              <font-awesome-icon class="mr-5px color-orange" icon="circle-info"/>
                {{findTipo(props.row.tipo)}}
            </el-tag>
          </h4>
        </template>
      </el-table-column>
      <el-table-column prop="descricao" width="*">
        <template slot-scope="props">
          <div class="descricao-table ml-5px">{{props.row.descricao}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" :show-overflow-tooltip="true" width="200px">
        <template slot-scope="props">
          <el-button type="text" @click="openWebsite(props.row.url)"> 
            Visite website <font-awesome-icon icon="right-to-bracket"/>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { TiposEscalabilidade } from '../utils/enum';

  @Component({
    name: 'TablePrincipal',
  })

  export default class TablePrincipal extends Vue {
    
    @Prop()
    public plataformas!: any;

    public imageUrl(img: string) {
      return  require(`@/assets/${img}`);
    }

    public openWebsite(url: string) {
      window.open(url, "_blank");
    }

    public findTipo(num: number): string {
      return TiposEscalabilidade[num].toString();
    }

    public irParaPlataforma(row: any): void {
      console.log(row)
      this.$router.push({ path: '/plataforma', replace: true });
    }

  }
</script>

<style scoped lang="scss">
.descricao-table {
  line-height: 25px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>