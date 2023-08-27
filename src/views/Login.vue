<template>
  <el-row>
    <div>
      <el-row style="margin: 0px;">
        <el-col :span="24">
          <el-col :span="10" :offset="7">
            <el-card style="margin-top: 15vh" border="none">
              <div slot="header" class="titulo center">
                <div>
                <el-image style="height: 30px" :src="require('@/assets/apenas-logo.png')"></el-image>
                  Login
                </div>
              </div>
              <el-form style="padding:10px; padding-top: 0px">
                <el-row>
                  <div class="label">
                    <font-awesome-icon class="color-red mr-5px" icon="user"/>
                    Usuário:
                  </div>
                  <el-form-item>
                    <el-input v-model="formValue.usuario">
                    </el-input>
                  </el-form-item>
                </el-row>
                <el-row>
                  <div class="label">
                    <font-awesome-icon class="color-red mr-5px" icon="lock"/>
                    Senha:
                  </div>
                  <el-form-item>
                    <el-input v-model="formValue.senha" show-password>
                    </el-input>
                  </el-form-item>
                </el-row>
                <el-row class="center">
                  <el-button class="btn-feedback" style="margin-top: 10px; width: 100%;" @click="enviarForm(formValue.urlsite)">
                    Entrar <font-awesome-icon icon="arrow-up-right-from-square" class="ml-5px"></font-awesome-icon>
                  </el-button>
                </el-row>
              </el-form>
            </el-card>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'Login',
  })

  export default class Login extends Vue {
    public formValue: any = {
      usuario: '',
      senha: '',
    };

    public resetForm(): void {
      this.formValue = {
        usuario: '',
        senha: '',
      };
    }

    public enviarForm(): void {
      if (this.formValue.usuario !== 'joao' && this.formValue.usuario !== '12345') {
        this.$notify({
          title: 'Erro ao efetuar login!',
          message: 'Usuário ou senha inválidos',
          type: 'error'
        });
        return;
      }

      this.$notify({
        title: 'Bem vindo!',
        message: 'Login efetuado com Sucesso!',
        type: 'success'
      });
      this.resetForm();
      this.$router.push({ path: '/admin-home', replace: true });
    }

    public created() {
      this.resetForm();
    }
  }

</script>

<style lang="scss">
.label {
  line-height: 24px;
  padding-bottom: 10px;
  font-weight: bold;
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
