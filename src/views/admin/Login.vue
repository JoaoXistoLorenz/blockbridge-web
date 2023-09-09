<template>
  <el-row class="m-0px">
    <el-col :span="10" :offset="7">
      <el-card class="login-card" border="none">

        <!-- Imagem -->
        <div slot="header" class="titulo center">
          <div>
            <el-image class="login-img" :src="require('@/assets/apenas-logo.png')"/>
            Login
          </div>
        </div>

        <!-- Form -->
        <el-form class="pt-0px pl-10px pr-10px pb-10px">
          <!-- Usuário -->
          <el-row>
            <div class="login-label">
              <font-awesome-icon class="color-red mr-5px" icon="user"/>
              Usuário:
            </div>
            <el-form-item>
              <el-input v-model="formValue.login"/>
            </el-form-item>
          </el-row>

          <!-- Senha -->
          <el-row>
            <div class="login-label">
              <font-awesome-icon class="color-red mr-5px" icon="lock"/>
              Senha:
            </div>
            <el-form-item>
              <el-input v-model="formValue.senha" show-password />
            </el-form-item>
          </el-row>

          <!-- Botão -->
          <el-row class="center">
            <el-button class="login-btn" @click="enviarForm(formValue.urlsite)" native-type="submit">
              Entrar
              <font-awesome-icon icon="arrow-up-right-from-square" class="ml-5px"></font-awesome-icon>
            </el-button>
          </el-row>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: 'Login',
  })

  export default class Login extends Vue {
    public formValue: any = {
      login: '',
      senha: '',
    };

    public resetForm(): void {
      this.formValue = {
        login: '',
        senha: '',
      };
    }

    public async enviarForm(): Promise<void> {
      const ret: any = await this.$axios.post(`/auth/login`, this.formValue);
      if (ret.success && ret.data.accessToken) {
        this.$notify({
          title: 'Bem vindo!',
          message: 'Login efetuado com Sucesso!',
          type: 'success'
        });
        this.resetForm();
        await localStorage.setItem('token', ret.data.accessToken);
        this.$router.push({ path: '/admin-home', replace: true });
        return;
      }
      this.$notify({
        title: 'Erro ao efetuar login!',
        message: 'Usuário ou senha inválidos',
        type: 'error'
      });
    }

    public async created() {
      this.resetForm();
      const token = await localStorage.getItem('token');
      if (token && token !== "") {
        this.$router.push({ path: '/admin-home', replace: true });
      }
    }
  }

</script>

<style lang="scss">
</style>
