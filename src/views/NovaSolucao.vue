<template>
  <el-row>
    <Topbar/>
    <el-main ref="main" class="main">

      <!-- Titulo -->
      <div class="titulo" style="text-align: center; margin-top: 40px">
        Auxilie no desenvolvimento da plataforma!
        <div class="titulo-secundario">
          <font-awesome-icon icon="handshake-angle" class="color-principal"/>
          Você conhece outro aplicativo ou possui alguma sugestão de melhoria? Conte para nós!
        </div>
      </div>

      <el-row style="margin: 50px;">
        <el-col :span="20" :offset="2">
          <el-card>
            <el-form style="padding:10px">
              <el-row>
                <div class="label">
                  <font-awesome-icon class="color-red mr-5px" icon="scroll"/>
                  Informe o título do Feedback:
                </div>
                <el-form-item>
                  <el-input v-model="formValue.titulo">
                  </el-input>
                </el-form-item>
              </el-row>
              <el-row>
                <div class="label">
                  <font-awesome-icon class="color-red mr-5px" icon="list-ol"/>
                  Selecione o tipo de Feedback:
                </div>
                <el-form-item>
                  <el-select v-model="formValue.tipo" style="width:100%" @change="resetUrl">
                    <el-option label="Cadastro de uma nova plataforma." :value="1"></el-option>
                    <el-option label="Sugestão de Melhoria" :value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <el-row v-if="formValue.tipo === 1">
                <div class="label">
                  <font-awesome-icon class="color-red mr-5px" icon="thumbtack"/>
                  Informe a URL da plataforma:
                </div>
                <el-form-item>
                  <el-input v-model="formValue.url">
                  </el-input>
                </el-form-item>
              </el-row>
              <el-row>
                <div class="label">
                  <font-awesome-icon class="color-red mr-5px" icon="comment-dots"/>
                  Realize uma breve Descrição:
                </div>
                <el-form-item>
                  <el-input 
                    v-model="formValue.descricao"
                    type="textarea" 
                    :maxlength="5000"
                    :autosize="{ minRows: 6, maxRows: 6}">
                  </el-input>
                </el-form-item>
              </el-row>
              <el-row class="center">
                <el-button class="btn-feedback" style="margin-top: 10px" @click="enviarForm()">
                  Enviar Feedback <font-awesome-icon icon="paper-plane" class="ml-5px"></font-awesome-icon>
                </el-button>
              </el-row>
            </el-form>
          </el-card>
        </el-col>
      </el-row>

    </el-main>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Topbar from '../components/Topbar.vue';
  import moment from 'moment';

  @Component({
    name: 'NovaSolucao',
    components: {Topbar}
  })

  export default class NovaSolucao extends Vue {
    public formValue: any = {
      id: null,
      titulo: '',
      url: '',
      ip: '',
      data: '',
      tipo: 1,
      descricao: '',
    };

    public resetUrl(): void {
      this.formValue.url = '';
    }

    public resetForm(): void {
      this.formValue = {
        id: null,
        titulo: '',
        url: '',
        ip: '',
        data: '',
        tipo: 1,
        descricao: '',
      };
    }

    isValidUrl(url: string): boolean {
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    }

    public async enviarForm(): Promise<void> {
      if (!this.formValue.titulo) {
        this.$notify({
          title: 'Erro ao enviar!',
          message: 'Informe o título do Feedback!',
          type: 'warning'
        });
        return;
      }
      if (!this.formValue.tipo) {
        this.$notify({
          title: 'Erro ao enviar!',
          message: 'Selecione o tipo de Feedback!',
          type: 'warning'
        });
        return;
      }

      if (this.formValue.tipo === 1 && this.formValue.url === '') {
        this.$notify({
          title: 'Erro ao enviar!',
          message: 'Informe a URL da plataforma!',
          type: 'warning'
        });
        return;
      }
      if (this.formValue.tipo === 1 && !this.isValidUrl(this.formValue.url)) {
        this.$notify({
          title: 'Erro ao enviar!',
          message: 'URL inválida! Exemplo de URL: https://www.google.com/',
          type: 'warning'
        });
        return;
      }

      if (!this.formValue.descricao) {
        this.$notify({
          title: 'Erro ao enviar!',
          message: 'Realize uma breve Descrição!',
          type: 'warning'
        });
        return;
      }

      try {
        this.formValue.data = moment().format('YYYY-MM-DD HH:mm:ss');
        const ret: any = await this.$axios.post(`/melhoria`, this.formValue);
        if (ret.success) {
          this.$notify({
            title: 'Formulário Enviado com Sucesso!',
            message: 'Muito obrigado por contribuir para o desenvolvimento da plataforma!',
            type: 'success'
          });
          this.resetForm();
          this.$router.push({ path: '/', replace: true });
        } else {
          this.$notify({
            title: 'Erro ao enviar!',
            message: ret.message.message,
            type: 'warning'
          });
          return;
        }
      } catch {
        this.$notify({
          title: 'Erro ao enviar!',
          message: 'Erro interno da aplicação!',
          type: 'warning'
        });
        return;
      }
    }

    public created(): void {
      this.resetForm();
    }
  }

</script>

<style lang="scss">
.label {
  line-height: 24px;
  padding-bottom: 10px;
  font-weight: 600;
}

.btn-feedback {
  margin-top: 25px;
  background: #635DFF;
  padding: 17px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  font-size: 16px;
  width: 35%;
  &:hover {
    background: #625dffc5;
    color: #fff;
  }

  &:focus {
    background: #625dffc5;
    color: #fff;
  }
}


</style>
