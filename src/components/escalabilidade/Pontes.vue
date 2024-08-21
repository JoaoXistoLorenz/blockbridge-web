<template>
  <el-row>
    <el-card :body-style="{ padding: '20px', display: 'flex', alignItems: 'center' }">
      <el-row style="border: 1px solid #d9dadb; align-items: center;">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right: 30px; padding-left: 20px">
          <h2 class="rollup-titulo">O Que São Pontes (Bridges)?</h2>
          <p class="rollup-descricao">
           Pontes, ou bridges, são soluções que permitem a interconexão entre diferentes blockchains, possibilitando a transferência de ativos, dados e informações entre elas. Essas pontes são essenciais para a interoperabilidade no ecossistema blockchain, pois cada blockchain opera de forma independente com suas próprias regras e formatos de dados. As bridges facilitam a comunicação entre essas diferentes redes, permitindo que os usuários transfiram ativos de uma blockchain para outra de maneira segura e eficiente.
          </p>
          <p class="rollup-descricao">
          </p>

          <h2 class="rollup-titulo">Como Funcionam as Pontes?</h2>
          <ul class="rollup-lista">
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Bloqueio e Emissão de Ativos:</strong>  Quando um usuário deseja transferir ativos de uma blockchain para outra, a ponte bloqueia o valor correspondente na blockchain de origem. Em seguida, a ponte emite um valor equivalente na blockchain de destino. Este processo garante que o total de ativos em circulação permaneça constante, preservando o valor dos ativos.
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Validação e Segurança:</strong> Para garantir que a transferência seja segura, as pontes utilizam mecanismos de validação, que podem variar desde contratos inteligentes automatizados até validadores dedicados que verificam a autenticidade das transações. Isso assegura que apenas transações válidas sejam executadas e que os ativos sejam protegidos durante o processo.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Interoperabilidade entre Blockchains:</strong> A principal função de uma ponte é permitir que diferentes blockchains "conversem" entre si. Isso pode incluir a transferência de tokens, mas também pode envolver o compartilhamento de dados e a execução de contratos inteligentes entre diferentes redes. Essa interoperabilidade expande o potencial das blockchains, permitindo que elas se complementem em vez de competirem.
            </li>
            <li style="text-align: justify; padding-bottom: 20px">
              <strong style="color: #002c53">Retorno dos Ativos:</strong>Se o usuário deseja retornar seus ativos à blockchain original, a ponte realiza o processo inverso. O valor na blockchain de destino é bloqueado ou queimado, e o valor correspondente é desbloqueado na blockchain de origem. Este processo assegura a integridade do sistema e a preservação do valor dos ativos.
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="align-items: center; text-align: center; justify-content: center;">
          <el-image :src="imageUrl('ponte.png')" style="padding: 30px;"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Pontes',
  })

  export default class Pontes extends Vue {
    public imageUrl(img: string): any {
      return require(`@/assets/${img}`);
    }
  }
</script>

<style scoped lang="scss">
.rollup-titulo {
  font-size: 24px;
  font-weight: bold;
  color: #002c53;
  margin-top: 20px;
  margin-bottom: 10px;
}

.rollup-subtitulo {
  font-size: 20px;
  font-weight: bold;
  color: #555;
  margin-top: 15px;
  margin-bottom: 10px;
}

.rollup-descricao {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: justify;
}

.rollup-lista {
  padding-left: 20px;
  margin-bottom: 10px;
}

.rollup-lista li {
  margin-bottom: 5px;
}
</style>