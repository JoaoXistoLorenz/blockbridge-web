<template>
  <div>

    <!-- Tabela -->
    <el-table
      id="formlink" 
      :data="value" border highlight-current-row
      row-class-name="pointer"
      empty-text="Nenhuma registro encontrado!"
      :header-cell-style="{ background: '#F5F7FA'}"
    >

      <!-- Nome -->
      <el-table-column prop="nome" label="Nome" min-width="150px">
        <template slot-scope="props">
          <el-input v-model="props.row.nome"></el-input>
        </template>
      </el-table-column>

      <!-- Tipo -->
      <el-table-column prop="tipo" label="Tipo" min-width="150px">
        <template slot-scope="props">
          <el-select v-model="props.row.tipo" style="width: 100%" @change="resetValRow(props.row)">
            <el-option label="Imagem" :value="1"></el-option>
            <el-option label="Icone" :value="2"></el-option>
          </el-select>
        </template>
      </el-table-column>

      <!-- Url -->
      <el-table-column prop="url" label="Url" min-width="150px">
        <template slot-scope="props">
          <el-input v-model="props.row.url"></el-input>
        </template>
      </el-table-column>

      <!-- Imagem -->
      <el-table-column prop="imagem" label="Imagem" min-width="150px">
        <template slot-scope="props">
          <el-input v-model="props.row.imagem" :disabled="props.row.tipo === 2 ? true : false"></el-input>
        </template>
      </el-table-column>

      <!-- Icone -->
      <el-table-column prop="icone" label="Icone" min-width="150px">
        <template slot-scope="props">
          <el-input v-model="props.row.icone" :disabled="props.row.tipo === 1 ? true : false"></el-input>
        </template>
      </el-table-column>

      <!-- BG -->
      <el-table-column prop="bg" label="BG" min-width="150px">
        <template slot-scope="props">
          <el-input v-model="props.row.bg" :disabled="props.row.tipo === 1 ? true : false"></el-input>
        </template>
      </el-table-column>

      <!-- Color -->
      <el-table-column prop="color" label="Color" min-width="150px">
        <template slot-scope="props">
          <el-input v-model="props.row.color" :disabled="props.row.tipo === 1 ? true : false"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="color" width="70px" align="center">
        <template slot="header">
          <el-button size="mini" type="primary" class="scalability-btn-ativo" @click="add()">
            <font-awesome-icon icon="square-plus"/>
          </el-button>
        </template>
        <template slot-scope="props">
          <el-popconfirm
            confirm-button-text='Sim'
            cancel-button-text='Não'
            icon="el-icon-info"
            icon-color="red"
            title="Você tem certeza que deseja excluir esse registro?"
            @confirm="del(props.$index)"
          >
            <template slot="reference">
              <el-button size="mini" type="danger">
                <font-awesome-icon icon="trash"/>
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'FormLink',
  })

  export default class FormLink extends Vue {
    @Prop()
    public value!: any;

    public selectedRow: any = undefined;

    // eslint-disable-next-line
    public resetValRow(row: any): void {
      if (row.tipo === 1) {
        row.icone = '';
        row.bg = '';
        row.color = '';
      } else {
        row.imagem = '';
      }
    }

    public add(): void {
      this.value.unshift({
        tipo: 2,
        url: '',
        imagem: '',
        bg: '#1B97F3',
        icone: '',
        color: 'white',
        nome: '',
      })
    }

    // eslint-disable-next-line
    public del(index: any): void {
      this.value.splice(index, 1);
    }
  }
</script>

<style scoped lang="scss">

.cadastro-title {
  font-weight: bold;
  color: #002C53;
}
</style>