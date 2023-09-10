<template>
  <div>
    <el-form ref="form" :model="value" :rules="rules">
      <el-row>

        <!-- Informações -->
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class=" pr-10px">
          <el-card :body-style="{ padding: '20px' }" class="mt-10px">
            <div slot="header" class="clearfix">
              <span class="cadastro-title">
                <font-awesome-icon class="mr-5px color-orange" icon="circle-info"/>
                Informações Gerais
              </span>
            </div>
            <el-form-item label="Nome da plataforma" class="bold" prop="nome">
              <el-input v-model="value.nome"></el-input>
            </el-form-item>
            <el-form-item label="Imagem da plataforma" class="bold" prop="imagem">
              <el-input v-model="value.imagem"></el-input>
            </el-form-item>
          </el-card>
        </el-col>

        <!-- Tipos -->
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class=" pl-10px">
          <el-card :body-style="{ padding: '20px' }" class="mt-10px">
            <div slot="header" class="clearfix">
              <span class="cadastro-title">
                <font-awesome-icon class="mr-5px color-orange" icon="server"/>
                Tipos da Plataforma
              </span>
            </div>
            <el-form-item label="Tipo Menu" prop="tipoMenu" class="bold">
              <el-select v-model="value.tipoMenu" placeholder="Select" style="width: 100%" @change="resetEscalabilidade()">
                <el-option
                  v-for="tipo, id in findTipoMenu()"
                  :key="id"
                  :label="`${id} - ${tipo}`"
                  :value="parseInt(id)">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Tipo Escalabilidade" prop="tipoEscalabilidade" class="bold">
              <el-select 
                v-model="value.tipoEscalabilidade" 
                placeholder="Select" 
                style="width: 100%" 
                clearable
                :disabled="value.tipoMenu === 1 ? false  : true"
              >
                <el-option
                  v-for="tipo, id in findTipoEscalabilidade()"
                  :key="id"
                  :label="`${id} - ${tipo}`"
                  :value="parseInt(id)">
                </el-option>
              </el-select>
            </el-form-item>
          </el-card>
        </el-col>
      </el-row>

      <!-- Descrição -->
      <el-row class="pt-10px">
        <el-col :span="24">
          <el-card :body-style="{ padding: '20px' }" class="mt-10px">
            <div slot="header" class="clearfix">
              <span class="cadastro-title">
                <font-awesome-icon class="mr-5px color-orange" icon="file-lines"/>
                Principais considerações
              </span>
            </div>
            <el-form-item label="Descrição" class="bold" prop="descricao">
              <el-input 
                v-model="value.descricao"
                type="textarea" 
                :autosize="{ minRows: 6, maxRows: 6}">
              </el-input>
            </el-form-item>
          </el-card>
        </el-col>
      </el-row>

      <!-- Blockchain -->
      <el-row class="pt-10px">
        <el-col :span="24">
          <el-card :body-style="{ padding: '20px' }" class="mt-10px">
            <div slot="header" class="clearfix">
              <span class="cadastro-title">
                <font-awesome-icon class="mr-5px color-orange" icon="cubes"/>
                Blockchains
              </span>
            </div>
            <div class="transfer-100">
              <el-transfer
                v-model="valueOfTransfer"
                @change="setDataBlockchains()"
                :titles="['Todas', 'Plataforma']"
                :data="blockchains">
              </el-transfer>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row class="pt-10px">
        <el-col :span="24">
          <el-card :body-style="{ padding: '20px' }" class="mt-10px">
            <div slot="header" class="clearfix">
              <span class="cadastro-title">
                <font-awesome-icon class="mr-5px color-orange" icon="link"/>
                Links
              </span>
            </div>
            <FormLink v-model="value.links" />
          </el-card>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
  import { TiposEscalabilidade, TipoMenu } from '../utils/enum';
  import FormLink from './FormLink.vue';

  @Component({
    name: 'FormPlataforma',
    components: {FormLink}
  })

  export default class FormPlataforma extends Vue {
    public blockchains: any = [];
    public valueOfTransfer: any = [];

    @Prop()
    public value!: any;

    @Ref()
    public readonly form!: any;

    public rules = {
      nome: [
        { 
          required: true, 
          message: 'O Nome é obrigatório', 
          trigger: ['blur', 'change'],
        }
      ],
      imagem: [
        { 
          required: true, 
          message: 'A imagem é obrigatória', 
          trigger: ['blur', 'change'],
        }
      ],
      tipoMenu: [
        { 
          required: true, 
          message: 'Tipo Menu é obrigatório', 
          trigger: ['blur', 'change'],
        }
      ],
      tipoEscalabilidade: [
        { 
          validator: this.checkEscalabilidade,
          trigger: ['blur', 'change'],
        }
      ],
      descricao: [
        { 
          required: true, 
          message: 'Descrição é obrigatória', 
          trigger: ['blur', 'change'],
        }
      ],
    }

    public findTipoMenu(): any {
      return TipoMenu;
    }

    public findTipoEscalabilidade(): any {
      const aux = TiposEscalabilidade;
      delete aux[1000];
      return aux;
    }

    public async checkCanSave(): Promise<boolean> {
      try {
        const isValidForm = await this.form.validate();
        return isValidForm;
      } catch (error) {
        return false;
      }
    }

    public resetEscalabilidade(): void {
      if (this.value.tipoMenu !== 1) {
        this.value.tipoEscalabilidade = null;
      }
    }

    public setValTransfer(): void {
      this.valueOfTransfer = [];
      this.value.blockchains.forEach((element) => {
        this.valueOfTransfer.push(element.idBlockchain.id);
      });
    }

    public async setAllBlockchains(): Promise<void> {
      const ret: any = await this.$axios.get(`/blockchain`);
      if (ret.success) {
        this.setValTransfer();
        ret.data.forEach((element) => {
          this.blockchains.push({
            key: element.id,
            id: element.id,
            label: element.nome,
          });
        }); 
      } else {
        this.blockchains = [];
      }
    }

    public setDataBlockchains(): void {
      this.value.blockchains = [];
      this.valueOfTransfer.forEach(element => {
        this.value.blockchains.push({
          idBlockchain: parseInt(element),
        })
      });
    }

    public checkEscalabilidade(rule: any, val: any, callback: any): any {
      if (this.value.tipoMenu === 1 && !val) {
        callback(new Error('Tipo escalabilidade inválido!'));
      }
      if (this.value.tipoMenu !== 1 && val) {
        callback(new Error('Tipo escalabilidade inválido!'));
      }
      callback();
    }

    public async created(): Promise<any> {
      await this.setAllBlockchains();
    }
  }
</script>

<style scoped lang="scss">

.cadastro-title {
  font-weight: bold;
  color: #002C53;
}
</style>