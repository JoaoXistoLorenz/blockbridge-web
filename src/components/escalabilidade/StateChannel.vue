<template>
  <el-row>
    <el-card :body-style="{ padding: '20px', display: 'flex', alignItems: 'center' }">
      <el-row style="border: 1px solid #d9dadb; align-items: center;">
        <el-col :sm="24" :md="24" :lg="12" style="padding-right: 30px; padding-left: 20px">
          <h2 class="rollup-titulo">O Que é State Channel?</h2>
          <p class="rollup-descricao">
            State Channel é uma solução de escalabilidade para blockchain, que permite a execução de transações fora da cadeia principal (off-chain) enquanto mantém a segurança on-chain. Funciona permitindo que dois ou mais participantes façam múltiplas transações entre si sem enviar todas essas transações para a blockchain principal. Somente a abertura e o fechamento do canal são registrados na blockchain, reduzindo significativamente a carga e os custos de transação.
          </p>
          <p class="rollup-descricao">
          </p>

          <h2 class="rollup-titulo">Como Funcionam as transações?</h2>
          <ul class="rollup-lista">
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Abertura do Canal:</strong> Dois participantes, como Alice e Bob, abrem um canal de estado depositando fundos em um contrato inteligente na blockchain principal. Esse contrato garante que os fundos podem ser transferidos de acordo com as regras do canal.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Transações Off-Chain:</strong> Dentro do canal, Alice e Bob podem fazer inúmeras transações entre si. Essas transações são registradas localmente por ambos os participantes e não são enviadas para a blockchain principal. Cada transação atualiza o estado do canal.
            </li>
            <li style="text-align: justify; padding-bottom: 5px">
              <strong style="color: #002c53">Atualização do Estado:</strong> O estado do canal pode incluir não apenas o saldo de tokens, mas também o estado de contratos inteligentes. Isso permite executar lógica complexa off-chain, como jogos, negociações ou serviços, de forma eficiente.
            </li>
            <li style="text-align: justify; padding-bottom: 20px">
              <strong style="color: #002c53">Fechamento do Canal:</strong> Quando os participantes desejam fechar o canal, eles submetem o estado final do canal à blockchain principal. O contrato inteligente então distribui os fundos de acordo com o último estado acordado, garantindo uma liquidação justa.
            </li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="24" :lg="12" style="align-items: center;">
          <el-image :src="imageUrl('state.png')" style="margin-top: 5%; width: 90%; height: 90%; margin-left: 5%"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'StateChannel',
  })

  export default class StateChannel extends Vue {
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